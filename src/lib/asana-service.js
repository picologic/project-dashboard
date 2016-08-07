var extend = require('util')._extend;
var asana = require('asana');
var config = require('config');
var _ = require('underscore');

var AsanaService = (function() {
    function ctor() {
        var cfg = config.get('asana');
        if (!cfg.accessToken || cfg.accessToken === '') throw new Error('AccessToken not provded');
        if (!cfg.workspace || cfg.workspace === '') throw new Error('Workspace not provided');

        var asanaClient = asana.Client.create().useAccessToken(cfg.accessToken);
        this.Projects = projects(asanaClient, cfg.workspace);
        this.Tasks = tasks(asanaClient, cfg.workspace);
    }
    return ctor;

    function projects(client, workspace) {
        return {
            list: list
        };

        function list(params) {
            return client.projects.findByWorkspace(workspace)
                .then(function (results) {
                    return _.where(results.data, params);
                });
        }
    }

    function tasks(client) {
        return {
            list: list
        };

        function list(project_id, params) {
            if (!project_id || project_id === '') throw new Error('Must provide a project id');

            var opts = {
                opt_fields: 'id,name,assignee_status,completed,assignee,due_on'
            };

            return client.tasks.findByProject(project_id, opts)
                .then(function (response) {
                    return _.where(response.data, params);
                });
        }
    }
}());

module.exports = AsanaService;