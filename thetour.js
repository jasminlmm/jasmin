var vrHomePage = vRViewPlayer('#tour', {
    image: 'assets/jasmin.jpg',
    is_stereo: false,
});

window.addEventListener('load', vrHomePage);

vrHomePage.on('ready', function(event) {
    vrHomePage.addHotspot('creating-hotspot-1', {
        pitch: 0,
        yaw: 0,
        radius:0.10,
        distance: 1
    });
    vrHomePage.addHotspot('creating-hotspot-2', {
         pitch: 0,
         yaw: 90,
         radius:0.10,
         distance: 1
    }); 
    
    vrHomePage.addHotspot('creating-hotspot-3', {
        pitch: 0,
        yaw: 180,
        radius:0.10,
        distance: 1
    });
  
    vrHomePage.addHotspot('creating-hotspot-4', {
        pitch: 0,
        yaw: 270,
        radius:0.10,
        distance: 1
    });
    vrHomePage.addHotspot('creating-hotspot-5', {
        pitch: 0,
        yaw: 360,
        radius:0.10,
        distance: 1
    });
}); 

vrHomePage.on('click', function(event) {
console.log('register all click events');
    if('click.id == 'creating-hotspot-1') {
       thetour("Welcome to the Upper West Side")
}
}
});
