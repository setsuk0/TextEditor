const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the event
  event.preventDefault();
  // Display the install button or trigger the installation programmatically
  // For example:
  // butInstall.style.display = 'block';
  // event.prompt();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Show the installation prompt when the button is clicked
  // Check if the `beforeinstallprompt` event has been triggered
  // For example:
  // if (deferredPrompt) {
  //   deferredPrompt.prompt();
  //   const { outcome } = await deferredPrompt.userChoice;
  //   if (outcome === 'accepted') {
  //     console.log('User accepted the PWA installation');
  //   } else {
  //     console.log('User declined the PWA installation');
  //   }
  //   deferredPrompt = null;
  // }
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // The PWA has been installed on the user's device
  console.log('PWA has been installed');
});

