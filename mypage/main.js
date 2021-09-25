
    bubbly({
       blur:15,
       colorStart: '#194167',
       colorStop: '#112144',
       radiusFunc:() => 5 + Math.random() * 15,
       angleFunc:() => -Math.PI / 2,
       velocityFunc:() => Math.random() * 7.5,
       bubbleFunc:() => `hsla(${200 + Math.random() * 50}, 100%, 65%, .1)`,
       bubbles:350
     });
    