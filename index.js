function copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = document.getElementById('mail-id').innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    alert("Copied to Clipboard!");
    document.body.removeChild(el);

  } 

  var waypoint = new Waypoint({
    element : document.getElementById('mail-id'),
    handler: function(){
      console.log('scrolled');
    }
  })