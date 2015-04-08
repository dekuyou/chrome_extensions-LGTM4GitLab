chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var oldMessage = $("textarea[name='note[note]']").val();
    $("textarea[name='note[note]']").val(oldMessage + "\n\n" + request.image);
});
