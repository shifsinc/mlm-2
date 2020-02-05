import { Component, OnInit } from '@angular/core';

var misc:any ={
  sidebar_mini_active: true
}

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/central",
    title: "Tablero",
    type: "link",
    icontype: "icon-components"
  },
  {
    path: "/central/",
    title: "Configuraciones",
    type: "sub",
    icontype: "icon-single-02",
    collapse: "configuracion",
    isCollapsed: true,
    children: [
      { path: "ubicacion", title: "Ubicacion", type: "link", ab: "UB" },
      { path: "contexto", title: "Contexto", type: "link", ab: "CT" },
      { path: "tipo-contexto", title: "Tipos", type: "link", ab: "TC" }
    ]
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }
  myFunc(event, menuitem) {
    event.preventDefault();
    event.stopPropagation();
    this.sleep(10);
    if (menuitem.isCollapsing === undefined) {
      menuitem.isCollapsing = true;

      // menuitem.isCollapsed = !menuitem.isCollapsed;

      var element = event.target;
      while (
        element.getAttribute("data-toggle") != "collapse" &&
        element != document.getElementsByTagName("html")[0]
      ) {
        element = element.parentNode;
      }
      element = element.parentNode.children[1];

      if (
        element.classList.contains("collapse") &&
        !element.classList.contains("show")
      ) {
        element.classList = "before-collapsing";
        var style = element.scrollHeight;

        element.classList = "collapsing";
        setTimeout(function() {
          element.setAttribute("style", "height:" + style + "px");
        }, 1);
        setTimeout(function() {
          element.classList = "collapse show";
          element.removeAttribute("style");
          menuitem.isCollapsing = undefined;
        }, 350);
      } else {
        var style = element.scrollHeight;
        setTimeout(function() {
          element.setAttribute("style", "height:" + (style + 20) + "px");
        }, 3);
        setTimeout(function() {
          element.classList = "collapsing";
        }, 3);
        setTimeout(function() {
          element.removeAttribute("style");
        }, 20);
        setTimeout(function() {
          element.classList = "collapse";
          menuitem.isCollapsing = undefined;
        }, 400);
      }
    }
  }
  minimizeSidebar(){
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('sidebar-mini')) {
        misc.sidebar_mini_active = true
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
        body.classList.remove('sidebar-mini');
        misc.sidebar_mini_active = false;
    } else {
            body.classList.add('sidebar-mini');
            misc.sidebar_mini_active = true;
    }

    // we simulate the window Resize so the charts will get updated in realtime.
    const simulateWindowResize = setInterval(function() {
        window.dispatchEvent(new Event('resize'));
    }, 180);

    // we stop the simulation of Window Resize after the animations are completed
    setTimeout(function() {
        clearInterval(simulateWindowResize);
    }, 1000);
  }

  showSidebarMessage(message){
    /*this.toastr.show(
      '<span class="now-ui-icons ui-1_bell-53"></span>', message,
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: "toast-top-right"
      }
    );*/
  }
}
