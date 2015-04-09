chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var oldMessage = $("textarea[name='note[note]']:visible").val();
    $("textarea[name='note[note]']:visible").val(oldMessage + "\n\n" + request.image);
});
