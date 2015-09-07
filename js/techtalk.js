var impress = impress();
impress.init();
timing = setInterval(impress.next, 8000);
if (typeof timing !== 'undefined') clearInterval(timing);