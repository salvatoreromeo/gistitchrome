
function copyToClipboard(request){

    chrome.tabs.getSelected(null, function(tab) {
        var min = request.min
        var max = request.max
        var path = tab.url.replace("https://github.com", "")
        var slice = ""
        if(min)
            slice = "&slice=" + min
        if(max)
            slice = slice + ":" + max
        var script = '<script type="text/javascript" src="http://gist-it.appspot.com/github'
            + path + '?footer=1' + slice + '"></script>'


        var input = document.getElementById('url');

        if(input == undefined)
            return;

        input.value = script;
        input.select();

        document.execCommand('copy', false, null);


    });


}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.extension.getBackgroundPage().copyToClipboard(request)
    });

