const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const featurPpic = document.querySelector('.feature-pic');
const content = document.querySelector('.content');

first.addEventListener('click',()=>{
    content.textContent = '';
    first.style.borderBottom = `3px solid hsl(0, 94%, 66%)`;
    second.style.borderBottom = `3px solid transparent`;
    third.style.borderBottom = `3px solid transparent`;
    featurPpic.setAttribute('src','mat/images/illustration-features-tab-1.svg');
    featurPpic.style.animation = 'show 4s';
    const h1 = document.createElement('h1');
          h1.textContent = ' Bookmark in one click';
          h1.style.animation = 'show 3s';
    const p = document.createElement('p');
    p.style.animation = 'show 4s';
          p.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'      
    content.append(h1,p);
})
second.addEventListener('click',()=>{
    content.textContent = '';
    second.style.borderBottom = `3px solid hsl(0, 94%, 66%)`;
    first.style.borderBottom = `3px solid transparent`;
    third.style.borderBottom = `3px solid transparent`;
    featurPpic.setAttribute('src','mat/images/illustration-features-tab-2.svg');
    featurPpic.style.animation = 'show 4s';
    const h1 = document.createElement('h1');
          h1.textContent = 'Intelligent search';
          h1.style.animation = 'show 3s';
    const p = document.createElement('p');
    p.style.animation = 'show 4s';
          p.textContent = ' Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'      
    content.append(h1,p);

})
third.addEventListener('click',()=>{
    content.textContent = ''
    third.style.borderBottom = `3px solid hsl(0, 94%, 66%)`;
    first.style.borderBottom = `3px solid transparent`;
    second.style.borderBottom = `3px solid transparent`;
    featurPpic.setAttribute('src','mat/images/illustration-features-tab-3.svg');
    featurPpic.style.animation = 'show 4s';
    const h1 = document.createElement('h1');
    h1.style.animation = 'show 3s';
    h1.textContent = 'Share your bookmarks';
     const p = document.createElement('p');
     p.style.animation = 'show 4s';
    p.textContent = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'      
    content.append(h1,p);

})