//>>built
require({cache:{"url:dojox/atom/widget/templates/FeedEntryViewer.html":'\x3cdiv class\x3d"feedEntryViewer"\x3e\n    \x3ctable border\x3d"0" width\x3d"100%" class\x3d"feedEntryViewerMenuTable" dojoAttachPoint\x3d"feedEntryViewerMenu" style\x3d"display: none;"\x3e\n        \x3ctr width\x3d"100%"  dojoAttachPoint\x3d"entryCheckBoxDisplayOptions"\x3e\n            \x3ctd align\x3d"right"\x3e\n                \x3cspan class\x3d"feedEntryViewerMenu" dojoAttachPoint\x3d"displayOptions" dojoAttachEvent\x3d"onclick:_toggleOptions"\x3e\x3c/span\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr class\x3d"feedEntryViewerDisplayCheckbox" dojoAttachPoint\x3d"entryCheckBoxRow" width\x3d"100%" style\x3d"display: none;"\x3e\n            \x3ctd dojoAttachPoint\x3d"feedEntryCelltitle"\x3e\n                \x3cinput type\x3d"checkbox" name\x3d"title" value\x3d"Title" dojoAttachPoint\x3d"feedEntryCheckBoxTitle" dojoAttachEvent\x3d"onclick:_toggleCheckbox"/\x3e\n\t\t\t\t\x3clabel for\x3d"title" dojoAttachPoint\x3d"feedEntryCheckBoxLabelTitle"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd dojoAttachPoint\x3d"feedEntryCellauthors"\x3e\n                \x3cinput type\x3d"checkbox" name\x3d"authors" value\x3d"Authors" dojoAttachPoint\x3d"feedEntryCheckBoxAuthors" dojoAttachEvent\x3d"onclick:_toggleCheckbox"/\x3e\n\t\t\t\t\x3clabel for\x3d"title" dojoAttachPoint\x3d"feedEntryCheckBoxLabelAuthors"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd dojoAttachPoint\x3d"feedEntryCellcontributors"\x3e\n                \x3cinput type\x3d"checkbox" name\x3d"contributors" value\x3d"Contributors" dojoAttachPoint\x3d"feedEntryCheckBoxContributors" dojoAttachEvent\x3d"onclick:_toggleCheckbox"/\x3e\n\t\t\t\t\x3clabel for\x3d"title" dojoAttachPoint\x3d"feedEntryCheckBoxLabelContributors"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd dojoAttachPoint\x3d"feedEntryCellid"\x3e\n                \x3cinput type\x3d"checkbox" name\x3d"id" value\x3d"Id" dojoAttachPoint\x3d"feedEntryCheckBoxId" dojoAttachEvent\x3d"onclick:_toggleCheckbox"/\x3e\n\t\t\t\t\x3clabel for\x3d"title" dojoAttachPoint\x3d"feedEntryCheckBoxLabelId"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd rowspan\x3d"2" align\x3d"right"\x3e\n                \x3cspan class\x3d"feedEntryViewerMenu" dojoAttachPoint\x3d"close" dojoAttachEvent\x3d"onclick:_toggleOptions"\x3e\x3c/span\x3e\n            \x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\t\x3ctr class\x3d"feedEntryViewerDisplayCheckbox" dojoAttachPoint\x3d"entryCheckBoxRow2" width\x3d"100%" style\x3d"display: none;"\x3e\n            \x3ctd dojoAttachPoint\x3d"feedEntryCellupdated"\x3e\n                \x3cinput type\x3d"checkbox" name\x3d"updated" value\x3d"Updated" dojoAttachPoint\x3d"feedEntryCheckBoxUpdated" dojoAttachEvent\x3d"onclick:_toggleCheckbox"/\x3e\n\t\t\t\t\x3clabel for\x3d"title" dojoAttachPoint\x3d"feedEntryCheckBoxLabelUpdated"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd dojoAttachPoint\x3d"feedEntryCellsummary"\x3e\n                \x3cinput type\x3d"checkbox" name\x3d"summary" value\x3d"Summary" dojoAttachPoint\x3d"feedEntryCheckBoxSummary" dojoAttachEvent\x3d"onclick:_toggleCheckbox"/\x3e\n\t\t\t\t\x3clabel for\x3d"title" dojoAttachPoint\x3d"feedEntryCheckBoxLabelSummary"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd dojoAttachPoint\x3d"feedEntryCellcontent"\x3e\n                \x3cinput type\x3d"checkbox" name\x3d"content" value\x3d"Content" dojoAttachPoint\x3d"feedEntryCheckBoxContent" dojoAttachEvent\x3d"onclick:_toggleCheckbox"/\x3e\n\t\t\t\t\x3clabel for\x3d"title" dojoAttachPoint\x3d"feedEntryCheckBoxLabelContent"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n    \x3c/table\x3e\n    \n    \x3ctable class\x3d"feedEntryViewerContainer" border\x3d"0" width\x3d"100%"\x3e\n        \x3ctr class\x3d"feedEntryViewerTitle" dojoAttachPoint\x3d"entryTitleRow" style\x3d"display: none;"\x3e\n            \x3ctd\x3e\n                \x3ctable width\x3d"100%" cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\n                    \x3ctr class\x3d"graphic-tab-lgray"\x3e\n\t\t\t\t\t\t\x3ctd class\x3d"lp2"\x3e\n\t\t\t\t\t\t\t\x3cspan class\x3d"lp" dojoAttachPoint\x3d"entryTitleHeader"\x3e\x3c/span\x3e\n\t\t\t\t\t\t\x3c/td\x3e\n                    \x3c/tr\x3e\n                    \x3ctr\x3e\n                        \x3ctd dojoAttachPoint\x3d"entryTitleNode"\x3e\n                        \x3c/td\x3e\n                    \x3c/tr\x3e\n                \x3c/table\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n\n        \x3ctr class\x3d"feedEntryViewerAuthor" dojoAttachPoint\x3d"entryAuthorRow" style\x3d"display: none;"\x3e\n            \x3ctd\x3e\n                \x3ctable width\x3d"100%" cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\n                    \x3ctr class\x3d"graphic-tab-lgray"\x3e\n\t\t\t\t\t\t\x3ctd class\x3d"lp2"\x3e\n\t\t\t\t\t\t\t\x3cspan class\x3d"lp" dojoAttachPoint\x3d"entryAuthorHeader"\x3e\x3c/span\x3e\n\t\t\t\t\t\t\x3c/td\x3e\n                    \x3c/tr\x3e\n                    \x3ctr\x3e\n                        \x3ctd dojoAttachPoint\x3d"entryAuthorNode"\x3e\n                        \x3c/td\x3e\n                    \x3c/tr\x3e\n                \x3c/table\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n\n        \x3ctr class\x3d"feedEntryViewerContributor" dojoAttachPoint\x3d"entryContributorRow" style\x3d"display: none;"\x3e\n            \x3ctd\x3e\n                \x3ctable width\x3d"100%" cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\n                    \x3ctr class\x3d"graphic-tab-lgray"\x3e\n\t\t\t\t\t\t\x3ctd class\x3d"lp2"\x3e\n\t\t\t\t\t\t\t\x3cspan class\x3d"lp" dojoAttachPoint\x3d"entryContributorHeader"\x3e\x3c/span\x3e\n\t\t\t\t\t\t\x3c/td\x3e\n                    \x3c/tr\x3e\n                    \x3ctr\x3e\n                        \x3ctd dojoAttachPoint\x3d"entryContributorNode" class\x3d"feedEntryViewerContributorNames"\x3e\n                        \x3c/td\x3e\n                    \x3c/tr\x3e\n                \x3c/table\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n        \n        \x3ctr class\x3d"feedEntryViewerId" dojoAttachPoint\x3d"entryIdRow" style\x3d"display: none;"\x3e\n            \x3ctd\x3e\n                \x3ctable width\x3d"100%" cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\n                    \x3ctr class\x3d"graphic-tab-lgray"\x3e\n\t\t\t\t\t\t\x3ctd class\x3d"lp2"\x3e\n\t\t\t\t\t\t\t\x3cspan class\x3d"lp" dojoAttachPoint\x3d"entryIdHeader"\x3e\x3c/span\x3e\n\t\t\t\t\t\t\x3c/td\x3e\n                    \x3c/tr\x3e\n                    \x3ctr\x3e\n                        \x3ctd dojoAttachPoint\x3d"entryIdNode" class\x3d"feedEntryViewerIdText"\x3e\n                        \x3c/td\x3e\n                    \x3c/tr\x3e\n                \x3c/table\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n    \n        \x3ctr class\x3d"feedEntryViewerUpdated" dojoAttachPoint\x3d"entryUpdatedRow" style\x3d"display: none;"\x3e\n            \x3ctd\x3e\n                \x3ctable width\x3d"100%" cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\n                    \x3ctr class\x3d"graphic-tab-lgray"\x3e\n\t\t\t\t\t\t\x3ctd class\x3d"lp2"\x3e\n\t\t\t\t\t\t\t\x3cspan class\x3d"lp" dojoAttachPoint\x3d"entryUpdatedHeader"\x3e\x3c/span\x3e\n\t\t\t\t\t\t\x3c/td\x3e\n                    \x3c/tr\x3e\n                    \x3ctr\x3e\n                        \x3ctd dojoAttachPoint\x3d"entryUpdatedNode" class\x3d"feedEntryViewerUpdatedText"\x3e\n                        \x3c/td\x3e\n                    \x3c/tr\x3e\n                \x3c/table\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n    \n        \x3ctr class\x3d"feedEntryViewerSummary" dojoAttachPoint\x3d"entrySummaryRow" style\x3d"display: none;"\x3e\n            \x3ctd\x3e\n                \x3ctable width\x3d"100%" cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\n                    \x3ctr class\x3d"graphic-tab-lgray"\x3e\n\t\t\t\t\t\t\x3ctd class\x3d"lp2"\x3e\n\t\t\t\t\t\t\t\x3cspan class\x3d"lp" dojoAttachPoint\x3d"entrySummaryHeader"\x3e\x3c/span\x3e\n\t\t\t\t\t\t\x3c/td\x3e\n                    \x3c/tr\x3e\n                    \x3ctr\x3e\n                        \x3ctd dojoAttachPoint\x3d"entrySummaryNode"\x3e\n                        \x3c/td\x3e\n                    \x3c/tr\x3e\n                \x3c/table\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n    \n        \x3ctr class\x3d"feedEntryViewerContent" dojoAttachPoint\x3d"entryContentRow" style\x3d"display: none;"\x3e\n            \x3ctd\x3e\n                \x3ctable width\x3d"100%" cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\n                    \x3ctr class\x3d"graphic-tab-lgray"\x3e\n\t\t\t\t\t\t\x3ctd class\x3d"lp2"\x3e\n\t\t\t\t\t\t\t\x3cspan class\x3d"lp" dojoAttachPoint\x3d"entryContentHeader"\x3e\x3c/span\x3e\n\t\t\t\t\t\t\x3c/td\x3e\n                    \x3c/tr\x3e\n                    \x3ctr\x3e\n                        \x3ctd dojoAttachPoint\x3d"entryContentNode"\x3e\n                        \x3c/td\x3e\n                    \x3c/tr\x3e\n                \x3c/table\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n    \x3c/table\x3e\n\x3c/div\x3e\n',
"url:dojox/atom/widget/templates/EntryHeader.html":'\x3cspan dojoAttachPoint\x3d"entryHeaderNode" class\x3d"entryHeaderNode"\x3e\x3c/span\x3e\n'}});
define("dojox/atom/widget/FeedEntryViewer","dojo/_base/kernel dojo/_base/connect dojo/_base/declare dojo/_base/fx dojo/_base/array dojo/dom-style dojo/dom-construct dijit/_Widget dijit/_Templated dijit/_Container dijit/layout/ContentPane ../io/Connection dojo/text!./templates/FeedEntryViewer.html dojo/text!./templates/EntryHeader.html dojo/i18n!./nls/FeedEntryViewer".split(" "),function(k,n,p,f,h,d,u,q,r,t,l,m,v,w,e){k.experimental("dojox.atom.widget.FeedEntryViewer");m=p("dojox.atom.widget.FeedEntryViewer",
[q,r,t],{entrySelectionTopic:"",_validEntryFields:{},displayEntrySections:"",_displayEntrySections:null,enableMenu:!1,enableMenuFade:!1,_optionButtonDisplayed:!0,templateString:v,_entry:null,_feed:null,_editMode:!1,postCreate:function(){""!==this.entrySelectionTopic&&(this._subscriptions=[k.subscribe(this.entrySelectionTopic,this,"_handleEvent")]);this.displayOptions.innerHTML=e.displayOptions;this.feedEntryCheckBoxLabelTitle.innerHTML=e.title;this.feedEntryCheckBoxLabelAuthors.innerHTML=e.authors;
this.feedEntryCheckBoxLabelContributors.innerHTML=e.contributors;this.feedEntryCheckBoxLabelId.innerHTML=e.id;this.close.innerHTML=e.close;this.feedEntryCheckBoxLabelUpdated.innerHTML=e.updated;this.feedEntryCheckBoxLabelSummary.innerHTML=e.summary;this.feedEntryCheckBoxLabelContent.innerHTML=e.content},startup:function(){this._displayEntrySections=""===this.displayEntrySections?"title authors contributors summary content id updated".split(" "):this.displayEntrySections.split(",");this._setDisplaySectionsCheckboxes();
this.enableMenu&&(d.set(this.feedEntryViewerMenu,"display",""),this.entryCheckBoxRow&&this.entryCheckBoxRow2&&this.enableMenuFade&&(f.fadeOut({node:this.entryCheckBoxRow,duration:250}).play(),f.fadeOut({node:this.entryCheckBoxRow2,duration:250}).play()))},clear:function(){this.destroyDescendants();this._feed=this._entry=null;this.clearNodes()},clearNodes:function(){h.forEach("entryTitleRow entryAuthorRow entryContributorRow entrySummaryRow entryContentRow entryIdRow entryUpdatedRow".split(" "),function(a){d.set(this[a],
"display","none")},this);h.forEach("entryTitleNode entryTitleHeader entryAuthorHeader entryContributorHeader entryContributorNode entrySummaryHeader entrySummaryNode entryContentHeader entryContentNode entryIdNode entryIdHeader entryUpdatedHeader entryUpdatedNode".split(" "),function(a){for(;this[a].firstChild;)u.destroy(this[a].firstChild)},this)},setEntry:function(a,b,c){this.clear();this._validEntryFields={};this._entry=a;this._feed=b;null!==a&&(this.entryTitleHeader&&this.setTitleHeader(this.entryTitleHeader,
a),this.entryTitleNode&&this.setTitle(this.entryTitleNode,this._editMode,a),this.entryAuthorHeader&&this.setAuthorsHeader(this.entryAuthorHeader,a),this.entryAuthorNode&&this.setAuthors(this.entryAuthorNode,this._editMode,a),this.entryContributorHeader&&this.setContributorsHeader(this.entryContributorHeader,a),this.entryContributorNode&&this.setContributors(this.entryContributorNode,this._editMode,a),this.entryIdHeader&&this.setIdHeader(this.entryIdHeader,a),this.entryIdNode&&this.setId(this.entryIdNode,
this._editMode,a),this.entryUpdatedHeader&&this.setUpdatedHeader(this.entryUpdatedHeader,a),this.entryUpdatedNode&&this.setUpdated(this.entryUpdatedNode,this._editMode,a),this.entrySummaryHeader&&this.setSummaryHeader(this.entrySummaryHeader,a),this.entrySummaryNode&&this.setSummary(this.entrySummaryNode,this._editMode,a),this.entryContentHeader&&this.setContentHeader(this.entryContentHeader,a),this.entryContentNode&&this.setContent(this.entryContentNode,this._editMode,a));this._displaySections()},
setTitleHeader:function(a,b){if(b.title&&b.title.value&&null!==b.title.value){var c=new g({title:e.title});a.appendChild(c.domNode)}},setTitle:function(a,b,c){c.title&&c.title.value&&null!==c.title.value&&("text"==c.title.type?(c=document.createTextNode(c.title.value),a.appendChild(c)):(b=document.createElement("span"),b=new l({refreshOnShow:!0,executeScripts:!1},b),b.attr("content",c.title.value),a.appendChild(b.domNode)),this.setFieldValidity("title",!0))},setAuthorsHeader:function(a,b){if(b.authors&&
0<b.authors.length){var c=new g({title:e.authors});a.appendChild(c.domNode)}},setAuthors:function(a,b,c){a.innerHTML="";if(c.authors&&0<c.authors.length)for(var d in c.authors)if(c.authors[d].name){b=a;if(c.authors[d].uri){var e=document.createElement("a");b.appendChild(e);e.href=c.authors[d].uri;b=e}e=c.authors[d].name;c.authors[d].email&&(e=e+" ("+c.authors[d].email+")");e=document.createTextNode(e);b.appendChild(e);b=document.createElement("br");a.appendChild(b);this.setFieldValidity("authors",
!0)}},setContributorsHeader:function(a,b){if(b.contributors&&0<b.contributors.length){var c=new g({title:e.contributors});a.appendChild(c.domNode)}},setContributors:function(a,b,c){if(c.contributors&&0<c.contributors.length)for(var d in c.contributors)b=document.createTextNode(c.contributors[d].name),a.appendChild(b),b=document.createElement("br"),a.appendChild(b),this.setFieldValidity("contributors",!0)},setIdHeader:function(a,b){if(b.id&&null!==b.id){var c=new g({title:e.id});a.appendChild(c.domNode)}},
setId:function(a,b,c){c.id&&null!==c.id&&(b=document.createTextNode(c.id),a.appendChild(b),this.setFieldValidity("id",!0))},setUpdatedHeader:function(a,b){if(b.updated&&null!==b.updated){var c=new g({title:e.updated});a.appendChild(c.domNode)}},setUpdated:function(a,b,c){c.updated&&null!==c.updated&&(b=document.createTextNode(c.updated),a.appendChild(b),this.setFieldValidity("updated",!0))},setSummaryHeader:function(a,b){if(b.summary&&b.summary.value&&null!==b.summary.value){var c=new g({title:e.summary});
a.appendChild(c.domNode)}},setSummary:function(a,b,c){c.summary&&c.summary.value&&null!==c.summary.value&&(b=document.createElement("span"),b=new l({refreshOnShow:!0,executeScripts:!1},b),b.attr("content",c.summary.value),a.appendChild(b.domNode),this.setFieldValidity("summary",!0))},setContentHeader:function(a,b){if(b.content&&b.content.value&&null!==b.content.value){var c=new g({title:e.content});a.appendChild(c.domNode)}},setContent:function(a,b,c){c.content&&c.content.value&&null!==c.content.value&&
(b=document.createElement("span"),b=new l({refreshOnShow:!0,executeScripts:!1},b),b.attr("content",c.content.value),a.appendChild(b.domNode),this.setFieldValidity("content",!0))},_displaySections:function(){d.set(this.entryTitleRow,"display","none");d.set(this.entryAuthorRow,"display","none");d.set(this.entryContributorRow,"display","none");d.set(this.entrySummaryRow,"display","none");d.set(this.entryContentRow,"display","none");d.set(this.entryIdRow,"display","none");d.set(this.entryUpdatedRow,"display",
"none");for(var a in this._displayEntrySections){var b=this._displayEntrySections[a].toLowerCase();"title"===b&&this.isFieldValid("title")&&d.set(this.entryTitleRow,"display","");"authors"===b&&this.isFieldValid("authors")&&d.set(this.entryAuthorRow,"display","");"contributors"===b&&this.isFieldValid("contributors")&&d.set(this.entryContributorRow,"display","");"summary"===b&&this.isFieldValid("summary")&&d.set(this.entrySummaryRow,"display","");"content"===b&&this.isFieldValid("content")&&d.set(this.entryContentRow,
"display","");"id"===b&&this.isFieldValid("id")&&d.set(this.entryIdRow,"display","");"updated"===b&&this.isFieldValid("updated")&&d.set(this.entryUpdatedRow,"display","")}},setDisplaySections:function(a){null!==a?(this._displayEntrySections=a,this._displaySections()):this._displayEntrySections="title authors contributors summary content id updated".split(" ")},_setDisplaySectionsCheckboxes:function(){var a="title authors contributors summary content id updated".split(" "),b;for(b in a)-1==h.indexOf(this._displayEntrySections,
a[b])?d.set(this["feedEntryCell"+a[b]],"display","none"):this["feedEntryCheckBox"+a[b].substring(0,1).toUpperCase()+a[b].substring(1)].checked=!0},_readDisplaySections:function(){var a=[];this.feedEntryCheckBoxTitle.checked&&a.push("title");this.feedEntryCheckBoxAuthors.checked&&a.push("authors");this.feedEntryCheckBoxContributors.checked&&a.push("contributors");this.feedEntryCheckBoxSummary.checked&&a.push("summary");this.feedEntryCheckBoxContent.checked&&a.push("content");this.feedEntryCheckBoxId.checked&&
a.push("id");this.feedEntryCheckBoxUpdated.checked&&a.push("updated");this._displayEntrySections=a},_toggleCheckbox:function(a){a.checked=a.checked?!1:!0;this._readDisplaySections();this._displaySections()},_toggleOptions:function(a){if(this.enableMenu){var b;this._optionButtonDisplayed?(this.enableMenuFade?(a=f.fadeOut({node:this.entryCheckBoxDisplayOptions,duration:250}),n.connect(a,"onEnd",this,function(){d.set(this.entryCheckBoxDisplayOptions,"display","none");d.set(this.entryCheckBoxRow,"display",
"");d.set(this.entryCheckBoxRow2,"display","");f.fadeIn({node:this.entryCheckBoxRow,duration:250}).play();f.fadeIn({node:this.entryCheckBoxRow2,duration:250}).play()}),a.play()):(d.set(this.entryCheckBoxDisplayOptions,"display","none"),d.set(this.entryCheckBoxRow,"display",""),d.set(this.entryCheckBoxRow2,"display","")),this._optionButtonDisplayed=!1):(this.enableMenuFade?(a=f.fadeOut({node:this.entryCheckBoxRow,duration:250}),b=f.fadeOut({node:this.entryCheckBoxRow2,duration:250}),n.connect(a,"onEnd",
this,function(){d.set(this.entryCheckBoxRow,"display","none");d.set(this.entryCheckBoxRow2,"display","none");d.set(this.entryCheckBoxDisplayOptions,"display","");f.fadeIn({node:this.entryCheckBoxDisplayOptions,duration:250}).play()}),a.play(),b.play()):(d.set(this.entryCheckBoxRow,"display","none"),d.set(this.entryCheckBoxRow2,"display","none"),d.set(this.entryCheckBoxDisplayOptions,"display","")),this._optionButtonDisplayed=!0)}},_handleEvent:function(a){a.source!=this&&("set"==a.action&&a.entry?
this.setEntry(a.entry,a.feed):"delete"==a.action&&a.entry&&a.entry==this._entry&&this.clear())},setFieldValidity:function(a,b){a&&(a.toLowerCase(),this._validEntryFields[a]=b)},isFieldValid:function(a){return this._validEntryFields[a.toLowerCase()]},getEntry:function(){return this._entry},getFeed:function(){return this._feed},destroy:function(){this.clear();h.forEach(this._subscriptions,k.unsubscribe)}});var g=m.EntryHeader=p("dojox.atom.widget.EntryHeader",[q,r,t],{title:"",templateString:w,postCreate:function(){this.setListHeader()},
setListHeader:function(a){this.clear();a&&(this.title=a);a=document.createTextNode(this.title);this.entryHeaderNode.appendChild(a)},clear:function(){this.destroyDescendants();if(this.entryHeaderNode)for(var a=0;a<this.entryHeaderNode.childNodes.length;a++)this.entryHeaderNode.removeChild(this.entryHeaderNode.childNodes[a])},destroy:function(){this.clear()}});return m});
//# sourceMappingURL=FeedEntryViewer.js.map