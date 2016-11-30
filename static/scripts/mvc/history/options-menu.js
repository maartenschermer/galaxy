define(["mvc/ui/popup-menu","mvc/history/copy-dialog","mvc/base-mvc","utils/localization","mvc/webhooks"],function(a,b,c,d,e){"use strict";function f(a,b,c){return _.clone(g).filter(function(d){return a&&!d.anon?!1:!b&&d.purge?!1:(d.href&&(d.href=c+d.href,d.target="galaxy_main"),d.confirm&&(d.func=function(){confirm(d.confirm)&&(galaxy_main.location=d.href)}),!0)})}var g=[{html:d("History Lists"),header:!0},{html:d("Saved Histories"),href:"history/list"},{html:d("Histories Shared with Me"),href:"history/list_shared"},{html:d("Current History"),header:!0,anon:!0},{html:d("Create New"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.createNewHistory()}},{html:d("Copy History"),func:function(){b(Galaxy.currHistoryPanel.model).done(function(){Galaxy.currHistoryPanel.loadCurrentHistory()})}},{html:d("Share or Publish"),href:"history/sharing"},{html:d("Show Structure"),href:"history/display_structured",anon:!0},{html:d("Extract Workflow"),href:"workflow/build_from_current_history"},{html:d("Delete"),anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm(d("Really delete the current history?"))&&(galaxy_main.window.location.href="history/delete?id="+Galaxy.currHistoryPanel.model.id)}},{html:d("Delete Permanently"),purge:!0,anon:!0,func:function(){Galaxy&&Galaxy.currHistoryPanel&&confirm(d("Really delete the current history permanently? This cannot be undone."))&&(galaxy_main.window.location.href="history/delete?purge=True&id="+Galaxy.currHistoryPanel.model.id)}},{html:d("Dataset Actions"),header:!0,anon:!0},{html:d("Copy Datasets"),href:"dataset/copy_datasets"},{html:d("Dataset Security"),href:"root/history_set_default_permissions"},{html:d("Resume Paused Jobs"),href:"history/resume_paused_jobs?current=True",anon:!0},{html:d("Collapse Expanded Datasets"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.collapseAll()}},{html:d("Unhide Hidden Datasets"),anon:!0,func:function(){if(Galaxy&&Galaxy.currHistoryPanel&&confirm(d("Really unhide all hidden datasets?"))){var a=Galaxy.currHistoryPanel.model.contents.hidden();a.ajaxQueue(Backbone.Model.prototype.save,{visible:!0}).done(function(){Galaxy.currHistoryPanel.renderItems()}).fail(function(){alert("There was an error unhiding the datasets"),console.error(arguments)})}}},{html:d("Delete Hidden Datasets"),anon:!0,func:function(){if(Galaxy&&Galaxy.currHistoryPanel&&confirm(d("Really delete all hidden datasets?"))){var a=Galaxy.currHistoryPanel.model.contents.hidden();a.ajaxQueue(Backbone.Model.prototype.save,{deleted:!0,visible:!0}).done(function(){Galaxy.currHistoryPanel.renderItems()}).fail(function(){alert("There was an error deleting the datasets"),console.error(arguments)})}}},{html:d("Purge Deleted Datasets"),confirm:d("Really delete all deleted datasets permanently? This cannot be undone."),href:"history/purge_deleted_datasets",purge:!0,anon:!0},{html:d("Downloads"),header:!0},{html:d("Export Tool Citations"),href:"history/citations",anon:!0},{html:d("Export History to File"),href:"history/export_archive?preview=True",anon:!0},{html:d("Other Actions"),header:!0},{html:d("Import from File"),href:"history/import_archive"}];e.add({url:"api/webhooks/history-menu/all",async:!1,callback:function(a){var b=[];$.each(a.models,function(a,c){var e=c.toJSON();e.activate&&b.push({html:d(e.config.title),anon:!0})}),b.length>0&&(b.unshift({html:d("Webhooks"),header:!0}),$.merge(g,b))}});var h=function(b,c){c=c||{};var d=void 0===c.anonymous?!0:c.anonymous,e=c.purgeAllowed||!1,g=f(d,e,Galaxy.root);return new a(b,g)};return h});
//# sourceMappingURL=../../../maps/mvc/history/options-menu.js.map