let $container = document.querySelector('.windows_xp')
let $folders = $container.querySelectorAll('.folders')
let $bin = $container.querySelectorAll('.bin')
let baseURL = window.location.href


class folder {
    constructor(container, file_class, name, description, screen){
        this.container = container
        this.file_class= file_class
        this.name = name
        this.description = description
        this.screen = screen
        this.init()
    }
    init(){

    }
}
let tata = new folder('oui','non', "projet 1", "projet sur les bebe phoque","bebe")


for (let i = 0; i < $folders.length; i++) {
    const e = $folders[i];
    e.addEventListener(
        'dblclick', () => {
            //Event
            dataLayer.push({
                'event': 'folder_click',
                'folder_name':`${e.dataset.screen}`
        });
            // files explorer
            const file_container = document.createElement("div")
            file_container.classList.add("file_container");
            file_container.classList.add("draggable");
            $container.appendChild(file_container);
            const files_explorer = new Image();
            files_explorer.src = `${baseURL}/public/src/images/files_explorer.png`;
            files_explorer.classList.add("explorer");
            file_container.appendChild(files_explorer);
            const project_name = document.createElement("span")
            project_name.classList.add("project_name");
            project_name.innerText = e.dataset.name
            file_container.appendChild(project_name);
            const button = new Image();
            button.src = `${baseURL}/public/src/images/window_buttons_1.png`;
            button.classList.add("button");
            file_container.appendChild(button);
            button.addEventListener('click', () => {$container.removeChild(file_container)})
            const folders_container = document.createElement("div")
            folders_container.classList.add("folders_container");
            file_container.appendChild(folders_container);

            // images viewer

            const image_container = document.createElement("div")
            image_container.classList.add("folder_container");
            image_container.classList.add("draggable_inside");
            folders_container.appendChild(image_container);
            const image_icon = new Image();
            image_icon.src = `${baseURL}/public/src/images/image_icon.jpg`;
            image_icon.classList.add("image_icon");
            image_container.appendChild(image_icon);
            image_container.addEventListener('dblclick', () => {
            dataLayer.push({
                'event': 'images_viewer_click',
            });
            let number_slide = 1
            const view_container = document.createElement("div")
            view_container.classList.add("view_container");
            view_container.classList.add("draggable");
            $container.appendChild(view_container);
            const view_template = new Image();
            view_template.src = `${baseURL}/public/src/images/photo_view_empty.png`;
            view_template.classList.add("view_template");
            view_container.appendChild(view_template);
            const project_name = document.createElement("span")
            project_name.classList.add("project_name_image");
            project_name.innerText = e.dataset.name + " images"
            view_container.appendChild(project_name);
            const button = new Image();
            button.src = `${baseURL}/public/src/images/window_buttons_1.png`;
            button.classList.add("button_photo");
            view_container.appendChild(button);
            button.addEventListener('click', () => {$container.removeChild(view_container)})
            const slide = new Image();
            slide.src = `${baseURL}/public/src/images/slider_images/${e.dataset.screen}/1.jpg`;
            slide.classList.add("slide");
            view_container.appendChild(slide);
            const button_next = document.createElement("div")
            button_next.classList.add("button_next");
            view_container.appendChild(button_next); 
            button_next.addEventListener('click',() => {
                dataLayer.push({
                    'event': 'button_next',
                });
                if (number_slide == 1) {
                    slide.src = `${baseURL}/public/src/images/slider_images/${e.dataset.screen}/2.jpg`;
                    number_slide = 2
                }
                else if (number_slide == 2) {
                    slide.src = `${baseURL}/public/src/images/slider_images/${e.dataset.screen}/3.jpg`;
                    number_slide = 3
                }
                else if (number_slide == 3) {
                    slide.src = `${baseURL}/public/src/images/slider_images/${e.dataset.screen}/4.jpg`;
                    number_slide = 4
                }
                else if (number_slide == 4) {
                    slide.src = `${baseURL}/public/src/images/slider_images/${e.dataset.screen}/1.jpg`;
                    number_slide = 1
                }
            })
            const button_back = document.createElement("div")
            button_back.classList.add("button_back");
            view_container.appendChild(button_back);
            button_back.addEventListener('click',() => {
                dataLayer.push({
                    'event': 'button_back',
                });
                if (number_slide == 1) {
                    slide.src = `${baseURL}/public/src/images/slider_images/${e.dataset.screen}/4.jpg`;
                    number_slide = 4
                }
                else if (number_slide == 2) {
                    slide.src = `${baseURL}/public/src/images/slider_images/${e.dataset.screen}/1.jpg`;
                    number_slide = 1
                }
                else if (number_slide == 3) {
                    slide.src = `${baseURL}/public/src/images/slider_images/${e.dataset.screen}/2.jpg`;
                    number_slide = 2
                }
                else if (number_slide == 4) {
                    slide.src = `${baseURL}/public/src/images/slider_images/${e.dataset.screen}/3.jpg`;
                    number_slide = 3
                }
            })  

            })

            // text viewer

            const txt_container = document.createElement("div")
            txt_container.classList.add("folder_container");
            txt_container.classList.add("draggable_inside");
            folders_container.appendChild(txt_container);
            const txt_icon = new Image();
            txt_icon.src = `${baseURL}/public/src/images/txt_icon2.png`;
            txt_icon.classList.add("image_icon");
            txt_container.appendChild(txt_icon);
            const image = document.createElement("span")
            image.innerText = "images.jpg"
            image_container.appendChild(image);
            const txt = document.createElement("span")
            txt.innerText = "description.txt"
            txt_container.appendChild(txt);
            txt_container.addEventListener('dblclick', () => {
                dataLayer.push({
                    'event': 'text_viewer',
                });
                const text_container = document.createElement("div")
                text_container.classList.add("text_container");
                text_container.classList.add("draggable_inside");
                $container.appendChild(text_container);
                const text_template = new Image();
                text_template.src = `${baseURL}/public/src/images/bloc_note.png`;
                text_template.classList.add("text_template");
                text_container.appendChild(text_template);
                const button = new Image();
                button.src = `${baseURL}/public/src/images/window_buttons_1.png`;
                button.classList.add("button_text");
                text_container.appendChild(button);
                const project_description = document.createElement("span")
                project_description.classList.add("project_description");
                project_description.innerText = e.dataset.name + " description"
                text_container.appendChild(project_description);
                const text_description = document.createElement("p")
                text_description.classList.add("text_description");
                text_description.innerText = e.dataset.description
                text_container.appendChild(text_description);
                button.addEventListener('click', () => {$container.removeChild(text_container)})

            })

            // discover

            const discover_container = document.createElement("div")
            discover_container.classList.add("folder_container");
            discover_container.classList.add("draggable_inside");
            folders_container.appendChild(discover_container);
            const discover_icon = new Image();
            discover_icon.src = `${baseURL}/public/src/images/exe_icon.png`;
            discover_icon.classList.add("image_icon");
            discover_container.appendChild(discover_icon);
            const dicover_txt = document.createElement("span")
            dicover_txt.innerText = "discover.exe"
            discover_container.appendChild(dicover_txt);
            discover_container.addEventListener('dblclick', () => {
                document.location.href=`${baseURL}Projet/${e.dataset.url}`
            })
        }
    )
}

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    // modifiers: [
    //   interact.modifiers.restrict({
    //     restriction: "parent",
    //     endOnly: true,
    //     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    //   }),
    // ],
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }
// target elements with the "draggable" class
interact('.draggable_inside')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrict({
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      }),
    ],
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

// function test(){
//     console.log('test')
// }

// $container.addEventListener(
//     'click', test
// )