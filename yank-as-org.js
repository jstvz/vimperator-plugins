// PLUGIN_INFO//{{{
var PLUGIN_INFO = xml`
<VimperatorPlugin>
    <name>Yank as Org</name>
    <description>yank-as-org from Vimperator</description>
    <author mail="j@jstvz.org" homepage="http://jstvz.org">jstvz</author>
    <version>0.1</version>
    <minVersion>2.0pre</minVersion>
    <maxVersion>2.0pre</maxVersion>
    <updateURL>https://github.com/vimpr/vimperator-plugins/raw/master/yank-as-org.js</updateURL>
    <detail><![CDATA[

== COMMANDS ==
yankorg [URL]:
    echo and copy URL and title in org-mode hyperlink format

== LIBRARY ==
plugins.get-as-org.getTiny(url):
    return TinyURL
    ]]></detail>
</VimperatorPlugin>`;
//}}}

(function() {
    commands.addUserCommand(['yankasorg'], 'copy title and url as Org',
        function(args) util.copyToClipboard(`[[${buffer.URL}][${buffer.title}]]`, true),
        {
            argCount: '?',
        });
})();
// vim: fdm=marker sw=4 ts=4 et:
