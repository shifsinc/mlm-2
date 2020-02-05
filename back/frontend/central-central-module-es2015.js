(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["central-central-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/central.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/central/central.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <app-sidebar></app-sidebar>\n    <div class=\"main-panel\">\n      <app-navbar></app-navbar>\n      <div class=\"main-panel\">\n        <div class=\"content\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n      <app-footer></app-footer>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/layouts/footer/footer.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/central/layouts/footer/footer.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container-fluid\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link\">\n            Creative Tim\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link\">\n            About Us\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link\">\n            Blog\n          </a>\n        </li>\n      </ul>\n      <div class=\"copyright\">\n        ©\n        <script>\n          document.write(new Date().getFullYear())\n        </script>2019 construido por \n        <a href=\"javascript:void(0)\" target=\"_blank\">Ventun</a>\n      </div>\n    </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/layouts/navbar/navbar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/central/layouts/navbar/navbar.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar sticky-top navbar-expand-lg\" data=\"blue\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <div class=\"navbar-toggle d-inline\">\n                <button type=\"button\" class=\"navbar-toggler\">\n                    <span class=\"navbar-toggler-bar bar1\"></span>\n                    <span class=\"navbar-toggler-bar bar2\"></span>\n                    <span class=\"navbar-toggler-bar bar3\"></span>\n                </button>\n            </div>\n            <a class=\"navbar-brand\">\n                <img src=\"/assets/img/ventun.png\">\n            </a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navigation\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"search-bar input-group\">\n                    <button class=\"btn btn-link\" id=\"search-button\" data-toggle=\"modal\" data-target=\"#searchModal\"><i\n                            class=\"tim-icons icon-zoom-split\"></i>\n                        <span class=\"d-lg-none d-md-block\">Empresas</span>\n                    </button>\n                </li>\n                <li class=\"dropdown nav-item\">\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\n                        <div class=\"notification d-none d-lg-block d-xl-block\"></div>\n                        <i class=\"tim-icons icon-sound-wave\"></i>\n                        <p class=\"d-lg-none\">\n                            Notifications\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-menu-right dropdown-navbar\">\n                        <li class=\"nav-link\"><a href=\"#\" class=\"nav-item dropdown-item\">Mike John responded to your\n                                email</a></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">You have 5 more\n                                tasks</a></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">Your friend\n                                Michael is in town</a></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">Another\n                                notification</a></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">Another one</a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"dropdown nav-item\">\n                    <a href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\n                        <div class=\"photo\">\n                            <img src=\"../assets/img/yo.jpg\" alt=\"Profile Photo\">\n                        </div>\n                        <b class=\"caret d-none d-lg-block d-xl-block\"></b>\n                        <p class=\"d-lg-none\">\n                            Log out\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-navbar\">\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\"\n                                routerLink=\"/profile\" routerLinkActive=\"active\">Perfil</a></li>\n                        <li class=\"dropdown-divider\"></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" (click)=\"cerrarSesion();\"\n                                class=\"nav-item dropdown-item\" routerLink=\"/sign/login\" routerLinkActive=\"active\">Cerrar\n                                Sessión</a></li>\n                    </ul>\n                </li>\n                <li class=\"separator d-lg-none\"></li>\n            </ul>\n        </div>\n    </div>\n    <!--<app-toast></app-toast>-->\n</nav>\n<div class=\"modal modal-search fade\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"searchModal\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\" style=\"\">\n                        <label class=\"input-group-text\" style=\"background-color: var(--primary);width: 80px;\" for=\"listaEquipos\">Equipo</label>\n                    </div>\n                    <select class=\"custom-select\" id=\"listaEquipos\" name=\"listaEquipos\" #listaEquipos=\"ngModel\" [(ngModel)]=\"name\">\n                        <option [ngValue]=\"undefined\" selected>Elige un Equipo...</option>\n                        <option *ngFor=\"let equipo of lista\" [(ngValue)]=\"equipo._id\">{{equipo.companyName}}</option>\n                    </select>\n                </div>\n                <!--<input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"SEARCH\">\n                <a class=\"btn btn-primary\" (click)=\"verificar();\">Verificar datos</a>-->\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"tim-icons icon-simple-remove\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/layouts/sidebar/sidebar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/central/layouts/sidebar/sidebar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\">\n    <div class=\"logo\">\n      <a class=\"simple-text logo-mini\">\n        <div class=\"logo-img\" (click)=\"minimizeSidebar()\">\n            <img src=\"./assets/img/logos/logo-ventun.png\" />\n        </div>\n      </a>\n      <a href=\"http://ventun.com/\" class=\"simple-text logo-normal\">\n        MLM\n      </a>\n    </div>\n  \n    <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n          <!--If is a single link-->\n          <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n            <i class=\"tim-icons {{ menuitem.icontype }}\"></i>\n            <p>{{ menuitem.title }}</p>\n          </a>\n          <!--If it have a submenu-->\n          <a\n            data-toggle=\"collapse\"\n            href=\"#{{ menuitem.collapse }}\"\n            *ngIf=\"menuitem.type === 'sub'\"\n            (click)=\"\n              myFunc($event, menuitem);\n                (menuitem.isCollapsed = !menuitem.isCollapsed)\n            \"\n            [attr.aria-expanded]=\"!menuitem.isCollapsed\"\n          >\n            <i class=\"tim-icons {{ menuitem.icontype }}\"></i>\n            <p>{{ menuitem.title }}<b class=\"caret\"></b></p>\n          </a>\n  \n          <!--Display the submenu items-->\n          <div\n            id=\"{{ menuitem.collapse }}\"\n            class=\"collapse\"\n            *ngIf=\"menuitem.type === 'sub'\"\n          >\n            <ul class=\"nav\">\n              <li\n                routerLinkActive=\"active\"\n                *ngFor=\"let childitem of menuitem.children\"\n              >\n                <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                  <span class=\"sidebar-mini-icon\">{{ childitem.ab }}</span>\n                  <span class=\"sidebar-normal\">{{ childitem.title }}</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/views/combo/combo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/central/views/combo/combo.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\n    <div class=\"col-md-12 p-0\">\n      <div class=\"card  card-comp \">\n        <div class=\"card-header\">\n          <h4 class=\"panel-title\">\n            <span class=\"text-bold\">Administrador </span>\n            de Contenido\n          </h4>\n          <div class=\"panel-tools\">\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-7\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"panel-title\">\n                    Lista de Contenidos\n                  </h4>\n                  <div class=\"panel-tools\">\n                  </div>\n                </div>\n                <div class=\"card-body p-0\">\n                  <div class=\"boxscroll\">\n                    <table class=\"table table-dark table-hoverd\" style=\"min-width: 650px;\">\n                      <thead>\n                        <tr class=\"grad-secondary row m-0\">\n                          <th class=\"col-1\">\n                            <span>Nº</span>\n                          </th>\n                          <th class=\"col-2\">\n                            <span style=\"cursor: pointer\" (click)=\"setOrder('acronym','')\"> Acrónimo</span>\n                          </th>\n                          <th class=\"col-3\">\n                            <span style=\"cursor: pointer\" (click)=\"setOrder('name','')\"> Nombre</span>\n                          </th>\n                          <th class=\"col-3\">\n                            <span style=\"cursor: pointer\" (click)=\"setOrder('owner','')\"> Propietario</span>\n                          </th>\n                          <th class=\"col-3\">\n                            <span style=\"cursor: pointer\" (click)=\"setOrder('typecon','')\"> Contexto</span>\n                          </th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr class=\"row m-0\" *ngFor=\"let contexto of myData.Data let r=index\" (click)=\"selectContext(contexto)\"\n                          style=\"cursor:pointer\" [ngClass]=\"{'rowSelected':myData.Current._id==contexto._id  }\">\n                          <td class=\"col-1\" style=\"color: black!important;\">{{r+1}}</td>\n                          <td class=\"col-2\" style=\"color: black!important;\">{{contexto.acronym}}</td>\n                          <td class=\"col-3\" style=\"color: black!important;\">{{contexto.name}}</td>\n                          <td class=\"col-3\" style=\"color: black!important;\">{{contexto.owner| context:ListFamily:'name'}}</td>\n                          <td class=\"col-3\" style=\"color: black!important;\">{{contexto.typecon_id | context:ListContext:'name'}}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n  \n                </div>\n                <div class=\"card-footer text-left\">\n                  <button class=\"btn btn-secondary btn-squared  \" (click)=\"addContext()\" [disabled]=\"myData.mode!='brow' && myData.mode!='selec'\">New</button>\n                  <button class=\"btn btn-purple btn-squared \" (click)=\"editContext()\" [disabled]=\"myData.mode!='selec'\">\n                    Edit </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-5\" *ngIf='myData.xCurrent'>\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"panel-title\">\n                    Location -Detail\n                  </h4>\n                  <div class=\"panel-tools\">\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <form name=\"contextForm\" #contextForm=\"ngForm\" class=\"container\" ngNativeValidate>\n                    <fieldset [disabled]=\"myData.mode=='brow' || myData.mode=='selec'\">\n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-9\">\n                          <label class=\"control-label\">\n                            Acronym <span class=\"symbol required\"></span>\n                          </label>\n                          <input type=\"text\" placeholder=\"Acronym\" class=\"form-control\" id=\"acronym\" name=\"acronym\"\n                            [(ngModel)]=\"myData.xCurrent.acronym\" required minlength=\"2\" #acronym=\"ngModel\">\n                        </div>\n                        <div class=\"col-sm-3 pl-0\">\n                          <div *ngIf=\"acronym.invalid && (acronym.dirty || acronym.touched)\">\n                            <div *ngIf=\"acronym?.errors.required\">\n                              <p class=\"globito\">Acronym is required.</p>\n                            </div>\n                            <div *ngIf=\"acronym?.errors.minlength\">\n                              <p class=\"globito\">Acronym must be at least 1 characters long.</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-9\">\n                          <label class=\"control-label\">\n                            Name <span class=\"symbol required\"></span>\n                          </label>\n                          <input type=\"text\" placeholder=\"Name\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"myData.xCurrent.name\"\n                            required minlength=\"3\" #name=\"ngModel\">\n                        </div>\n                        <div class=\"col-sm-3 pl-0\">\n                          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n                            <div *ngIf=\"name?.errors.required\">\n                              <p class=\"globito\"> Name is required.</p>\n                            </div>\n                            <div *ngIf=\"name?.errors.minlength\">\n                              <p class=\"globito\">Name must be at least 3 characters long.</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-9\">\n                          <label class=\"control-label\">\n                            Owner <span class=\"symbol required\"></span>\n                          </label>\n                          <select class=\"form-control\" tabindex=\"-1\" aria-hidden=\"true\" id=\"owner\" name=\"owner\" #owner=\"ngModel\"\n                            [(ngModel)]=\"myData.xCurrent.owner\" #owner=\"ngModel\">\n                            <option [ngValue]=undefined selected>Please Select</option>\n                            <option *ngFor='let conte of ListFamVal' [ngValue]=\"conte._id\">\n                              {{conte.name}}\n                            </option>\n                          </select>\n                        </div>\n                        <div class=\"col-sm-3 pl-0\">\n                          <div *ngIf=\"owner.invalid && (owner.dirty || owner.touched)\">\n                            <div *ngIf=\"owner?.errors.required\">\n                              <p class=\"globito\">Owner is required.</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-9\">\n                          <label class=\"control-label\">\n                            Context <span class=\"symbol required\"></span>\n                          </label>\n                          <select class=\"form-control\" tabindex=\"-1\" aria-hidden=\"true\" id=\"typecon_id\" name=\"typecon_id\"\n                            #typecon_id=\"ngModel\" [(ngModel)]=\"myData.xCurrent.typecon_id\" required>\n                            <option [ngValue]=undefined selected>Please Select</option>\n                            <option *ngFor='let tyconte of ListCtxVal' [ngValue]=\"tyconte._id\">\n                              {{tyconte.name}}\n                            </option>\n                          </select>\n                        </div>\n                        <div class=\"col-sm-3 pl-0\">\n                          <div *ngIf=\"typecon_id.invalid && (typecon_id.dirty || typecon_id.touched)\">\n                            <div *ngIf=\"typecon_id?.errors.required\">\n                              <p class=\"globito\">Type Context is required.</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </fieldset>\n                  </form>\n                </div>\n                <div class=\"card-footer text-right\">\n                  <button class=\"btn btn-secondary btn-squared \" [disabled]=\"myData.mode=='brow' || myData.mode=='selec'\"\n                    (click)=\"cancelContext()\">Cancelar</button>\n                  <button class=\"btn btn-purple btn-squared \" [disabled]=\"myData.mode=='brow' || myData.mode=='selec' || contextForm.invalid\"\n                    (click)=\"saveContext()\">Guardar</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          Los datos se encuentran en : {{myData.mode}}\n        </div>\n      </div>\n    </div>\n  \n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/views/context/context.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/central/views/context/context.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\n  <div class=\"col-md-12 p-0\">\n    <div class=\"card  card-comp \">\n      <div class=\"card-header\">\n        <h4 class=\"panel-title\">\n          <span class=\"text-bold\">Administrador </span>\n          de Contexto\n        </h4>\n        <div class=\"panel-tools\">\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-7\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h4 class=\"panel-title\">\n                  Lista de Contextos\n                </h4>\n                <div class=\"panel-tools\">\n                </div>\n              </div>\n              <div class=\"card-body p-0\">\n                <div class=\"boxscroll\">\n                  <table class=\"table  table-hoverd\" style=\"min-width: 650px;\">\n                    <thead>\n                      <tr class=\"grad-secondary row m-0\">\n                        <th class=\"col-1\">\n                          <span>Nº</span>\n                        </th>\n                        <th class=\"col-3\">\n                          <span style=\"cursor: pointer\" (click)=\"setOrder('acronym','')\"> Acrónimo</span>\n                        </th>\n                        <th class=\"col-4\">\n                          <span style=\"cursor: pointer\" (click)=\"setOrder('name','')\"> Nombre</span>\n                        </th>\n                        <th class=\"col-4\">\n                          <span style=\"cursor: pointer\" (click)=\"setOrder('owner','')\"> Padre</span>\n                        </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr class=\"row m-0\" *ngFor=\"let contexto of myData.Data let r=index\" (click)=\"selectContext(contexto)\"\n                        style=\"cursor:pointer\" [ngClass]=\"{'rowSelected':myData.Current._id==contexto._id  }\">\n                        <td class=\"col-1\" style=\"color: black!important;\">{{r+1}}</td>\n                        <td class=\"col-3\" style=\"color: black!important;\">{{contexto.acronym}}</td>\n                        <td class=\"col-4\" style=\"color: black!important;\">{{contexto.name}}</td>\n                        <td class=\"col-4\" style=\"color: black!important;\">{{contexto.owner |\n                          context:myData.Data:'name'}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n\n                </div>\n\n              </div>\n              <div class=\"card-footer text-left\">\n                <button class=\"btn btn-primary \" (click)=\"addContext()\" [disabled]=\"myData.mode!='brow' && myData.mode!='selec'\">New</button>\n                <button class=\"btn btn-secondary \" (click)=\"editContext()\" [disabled]=\"myData.mode!='selec'\">\n                  Edit </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-5\" *ngIf='myData.xCurrent'>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h4 class=\"panel-title\">\n                  Context-Detail\n                </h4>\n                <div class=\"panel-tools\">\n                  <!-- <a class=\"btn btn-xs btn-link panel-close\" href=\"\">\n                    <i class=\"fa fa-times\"></i>\n                  </a> -->\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <form name=\"contextForm\" #contextForm=\"ngForm\" class=\"container\" ngNativeValidate>\n                  <fieldset [disabled]=\"myData.mode=='brow' || myData.mode=='selec'\">\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-9\">\n                        <label class=\"control-label\">\n                          Acronym <span class=\"symbol required\"></span>\n                        </label>\n                        <input type=\"text\" placeholder=\"Acronym\" class=\"form-control\" id=\"acronym\" name=\"acronym\"\n                          [(ngModel)]=\"myData.xCurrent.acronym\" required minlength=\"2\" #acronym=\"ngModel\">\n                      </div>\n                      <div class=\"col-sm-3 pl-0\">\n                        <div *ngIf=\"acronym.invalid && (acronym.dirty || acronym.touched)\">\n                          <div *ngIf=\"acronym?.errors.required\">\n                            <p class=\"globito\">Acronym is required.</p>\n                          </div>\n                          <div *ngIf=\"acronym?.errors.minlength\">\n                            <p class=\"globito\">Acronym must be at least 2 characters long.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-9\">\n                        <label class=\"control-label\">\n                          Name <span class=\"symbol required\"></span>\n                        </label>\n                        <input type=\"text\" placeholder=\"Name\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"myData.xCurrent.name\"\n                          required minlength=\"3\" #name=\"ngModel\">\n                      </div>\n                      <div class=\"col-sm-3 pl-0\">\n                        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n                          <div *ngIf=\"name?.errors.required\">\n                            <p class=\"globito\">Name is required.</p>\n                          </div>\n                          <div *ngIf=\"name?.errors.minlength\">\n                            <p class=\"globito\">Name must be at least 3 characters long.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-9\">\n                        <label class=\"control-label\">\n                          Owner <span class=\"symbol required\"></span>\n                        </label>\n                        <select class=\"form-control\" tabindex=\"-1\" aria-hidden=\"true\" id=\"owner\" name=\"owner\" #owner=\"ngModel\"\n                          [(ngModel)]=\"myData.xCurrent.owner\" #owner=\"ngModel\">\n                          <option [ngValue]=undefined selected>Please Select</option>\n                          <option *ngFor='let conte of ListContext' [ngValue]=\"conte._id\">\n                            {{conte.name}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"col-sm-3 pl-0\">\n                        <div *ngIf=\"owner.invalid && (owner.dirty || owner.touched)\">\n                          <div *ngIf=\"owner?.errors.required\">\n                            <p class=\"globito\">Owner is required.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-9\">\n                        <label class=\"control-label\">\n                          Description <span class=\"symbol required\"></span>\n                        </label>\n                        <textarea placeholder=\"Description\" class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"myData.xCurrent.description\"\n                          #description=\"ngModel\"></textarea>\n                      </div>\n                      <div class=\"col-sm-3 pl-0\">\n                        <div *ngIf=\"description.invalid && (description.dirty || description.touched)\">\n                          <div *ngIf=\"description?.errors.required\">\n                            <p class=\"globito\">description is required.</p>\n                          </div>\n                          <div *ngIf=\"description?.errors.minlength\">\n                            <p class=\"globito\">description must be at least 3 characters long.</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n\n                    \n                  </fieldset>\n                </form>\n              </div>\n              <div class=\"card-footer text-right\">\n                <button class=\"btn btn-secondary btn-squared \" [disabled]=\"myData.mode=='brow' || myData.mode=='selec'\"\n                  (click)=\"cancelContext()\">Cancelar</button>\n                <button class=\"btn btn-purple btn-squared \" [disabled]=\"myData.mode=='brow' || myData.mode=='selec' || contextForm.invalid\"\n                  (click)=\"saveContext()\">Guardar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        Los datos se encuentran en : {{myData.mode}}\n      </div>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/views/type-context/type-context.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/central/views/type-context/type-context.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\n    <div class=\"col-md-12 p-0\">\n      <div class=\"card  card-comp \">\n        <div class=\"card-header\">\n          <h4 class=\"panel-title\">\n            <span class=\"text-bold\">Administrador </span>\n            de Tipos de Contexto\n          </h4>\n          <div class=\"panel-tools\">\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-7\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"panel-title\">\n                    Lista de Tipos de Contexto\n                  </h4>\n                  <div class=\"panel-tools\">\n                  </div>\n                </div>\n                <div class=\"card-body p-0\">\n                  <div class=\"boxscroll\">\n                    <table class=\"table table-borderedd table-hoverd \" style=\"min-width: 650px;\">\n                      <thead>\n                        <tr class=\"grad-secondary row m-0\">\n                          <th class=\"col-1\">\n                            <span>Nº</span>\n                          </th>\n                          <th class=\"col-3\">\n                            <span style=\"cursor: pointer\" (click)=\"setOrder('acronym','')\"> Acrónimo</span>\n                          </th>\n                          <th class=\"col-4\">\n                            <span style=\"cursor: pointer\" (click)=\"setOrder('name','')\"> Nombre</span>\n                          </th>\n                          <th class=\"col-4\">\n                            <span style=\"cursor: pointer\" (click)=\"setOrder('owner','')\"> Contexto</span>\n                          </th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr class=\"row m-0\" *ngFor=\"let contexto of myData.Data let r=index\" (click)=\"selectContext(contexto)\"\n                          style=\"cursor:pointer\">\n                          <td class=\"col-1\" [ngClass]=\"{'trSelected':myData.Current._id==contexto._id }\" style=\"color: black!important;\">{{r+1}}</td>\n                          <td class=\"col-3\" [ngClass]=\"{'trSelected':myData.Current._id==contexto._id }\" style=\"color: black!important;\">{{contexto.acronym}}</td>\n                          <td class=\"col-4\" [ngClass]=\"{'trSelected':myData.Current._id==contexto._id }\" style=\"color: black!important;\">{{contexto.name}}</td>\n                          <td class=\"col-4\" [ngClass]=\"{'trSelected':myData.Current._id==contexto._id }\" style=\"color: black!important;\">{{contexto.context_id\n                            |\n                            context:ListContext:'name'}}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n  \n                  </div>\n  \n                </div>\n                <div class=\"card-footer text-left\">\n                  <button class=\"btn btn-secondary btn-squared  \" (click)=\"addContext()\" [disabled]=\"myData.mode!='brow' && myData.mode!='selec'\">New</button>\n                  <button class=\"btn btn-purple btn-squared \" (click)=\"editContext()\" [disabled]=\"myData.mode!='selec'\">\n                    Edit </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-5\" *ngIf='myData.xCurrent'>\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"panel-title\">\n                    Type Context-Detail\n                  </h4>\n                  <div class=\"panel-tools\">\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <form name=\"contextForm\" #contextForm=\"ngForm\" class=\"container\" ngNativeValidate>\n                    <fieldset [disabled]=\"myData.mode=='brow' || myData.mode=='selec'\">\n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-9\">\n                          <label class=\"control-label\">\n                            Acronym <span class=\"symbol required\"></span>\n                          </label>\n                          <input type=\"text\" placeholder=\"Acronym\" class=\"form-control\" id=\"acronym\" name=\"acronym\"\n                            [(ngModel)]=\"myData.xCurrent.acronym\" required minlength=\"1\" #acronym=\"ngModel\">\n                        </div>\n                        <div class=\"col-sm-3 pl-0\">\n                          <div *ngIf=\"acronym.invalid && (acronym.dirty || acronym.touched)\">\n                            <div *ngIf=\"acronym?.errors.required\">\n                              <p class=\"globito\">Acronym is required.</p>\n                            </div>\n                            <div *ngIf=\"acronym?.errors.minlength\">\n                              <p class=\"globito\">Acronym must be at least 1 characters long.</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-9\">\n                          <label class=\"control-label\">\n                            Name <span class=\"symbol required\"></span>\n                          </label>\n                          <input type=\"text\" placeholder=\"Name\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"myData.xCurrent.name\"\n                            required minlength=\"3\" #name=\"ngModel\">\n                        </div>\n                        <div class=\"col-sm-3 pl-0\">\n                          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n                            <div *ngIf=\"name?.errors.required\">\n                              <p class=\"globito\">Name is required.</p>\n                            </div>\n                            <div *ngIf=\"name?.errors.minlength\">\n                              <p class=\"globito\">Name must be at least 3 characters long.</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-9\">\n                          <label class=\"control-label\">\n                            Context <span class=\"symbol required\"></span>\n                          </label>\n                          <select class=\"form-control\" tabindex=\"-1\" aria-hidden=\"true\" id=\"owner\" name=\"owner\" #owner=\"ngModel\"\n                            [(ngModel)]=\"myData.xCurrent.context_id\" #owner=\"ngModel\" required>\n                            <option [ngValue]=undefined selected>Please Select</option>\n                            <option *ngFor='let conte of ListCtxVal' [ngValue]=\"conte._id\">\n                              {{conte.name}}\n                            </option>\n                          </select>\n                        </div>\n                        <div class=\"col-sm-3 pl-0\">\n                          <div *ngIf=\"owner.invalid && (owner.dirty || owner.touched)\">\n                            <div *ngIf=\"owner?.errors.required\">\n                              <p class=\"globito\">Context is required.</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-9\">\n                          <label class=\"control-label\">\n                            Description <span class=\"symbol required\"></span>\n                          </label>\n                          <textarea placeholder=\"Description\" class=\"form-control\" name=\"description\" id=\"description\" [(ngModel)]=\"myData.xCurrent.description\"\n                            #description=\"ngModel\"></textarea>\n                        </div>\n                        <div class=\"col-sm-3 pl-0\">\n                          <div *ngIf=\"description.invalid && (description.dirty || description.touched)\">\n                            <div *ngIf=\"description?.errors.required\">\n                              <p class=\"globito\">description is required.</p>\n                            </div>\n                            <div *ngIf=\"description?.errors.minlength\">\n                              <p class=\"globito\">description must be at least 3 characters long.</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </fieldset>\n                  </form>\n                </div>\n                <div class=\"card-footer text-right\">\n                  <button class=\"btn btn-secondary btn-squared \" [disabled]=\"myData.mode=='brow' || myData.mode=='selec'\"\n                    (click)=\"cancelContext()\">Cancelar</button>\n                  <button class=\"btn btn-purple btn-squared \" [disabled]=\"myData.mode=='brow' || myData.mode=='selec' || contextForm.invalid\"\n                    (click)=\"saveContext()\">Guardar</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          Los datos se encuentran en : {{myData.mode}}\n        </div>\n      </div>\n    </div>\n  \n  </div>");

/***/ }),

/***/ "./src/app/central/central-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/central/central-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CentralRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralRoutingModule", function() { return CentralRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _central_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./central.component */ "./src/app/central/central.component.ts");
/* harmony import */ var _views_combo_combo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/combo/combo.component */ "./src/app/central/views/combo/combo.component.ts");
/* harmony import */ var _views_context_context_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/context/context.component */ "./src/app/central/views/context/context.component.ts");
/* harmony import */ var _views_type_context_type_context_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/type-context/type-context.component */ "./src/app/central/views/type-context/type-context.component.ts");







const routes = [
    //{ path: '', redirectTo: 'central', pathMatch: 'full' },
    {
        path: 'ubicacion',
        component: _central_component__WEBPACK_IMPORTED_MODULE_3__["CentralComponent"],
        children: [{ path: '', component: _views_combo_combo_component__WEBPACK_IMPORTED_MODULE_4__["ComboComponent"] }]
    },
    {
        path: 'contexto',
        component: _central_component__WEBPACK_IMPORTED_MODULE_3__["CentralComponent"],
        children: [{ path: '', component: _views_context_context_component__WEBPACK_IMPORTED_MODULE_5__["ContextComponent"] }]
    },
    {
        path: 'tipo-contexto',
        component: _central_component__WEBPACK_IMPORTED_MODULE_3__["CentralComponent"],
        children: [{ path: '', component: _views_type_context_type_context_component__WEBPACK_IMPORTED_MODULE_6__["TypeContextComponent"] }]
    }
];
let CentralRoutingModule = class CentralRoutingModule {
};
CentralRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CentralRoutingModule);



/***/ }),

/***/ "./src/app/central/central.component.css":
/*!***********************************************!*\
  !*** ./src/app/central/central.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    /* font-family: \"Raleway\", sans-serif; */\r\n  /* font-weight: 400; */\r\n  /* font-size: 16px; */\r\n}\r\n\r\n\r\n\r\nhtml, body {\r\n    background-color: rgba(112, 60, 135, .1);\r\n    overflow-x: hidden;\r\n  }\r\n\r\n\r\n\r\n.logo {\r\n    max-width: 70%;\r\n    height: 70px;\r\n  }\r\n\r\n\r\n\r\n.dGrupoComponentes {\r\n    background-color: white;\r\n    margin: 5px 0 30px 0;\r\n    padding: 25px;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 10px rgba(112, 60, 135, .3);\r\n  }\r\n\r\n\r\n\r\n.campoFormulario {\r\n    float: left;\r\n  }\r\n\r\n\r\n\r\ndiv > label {\r\n    font-weight: 600;\r\n  }\r\n\r\n\r\n\r\n.bNavegacion {\r\n    margin: 0 5px;\r\n  }\r\n\r\n\r\n\r\n.navbar {\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n  ----------------------------------------------------- */\r\n\r\n\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: stretch;\r\n    background: #f8f9fa;\r\n  }\r\n\r\n\r\n\r\n#content {\r\n    padding: 20px;\r\n    transition: all 0.3s;\r\n    width: 100%;\r\n  }\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n    #content {\r\n      transition: all 0.3s;\r\n      width: calc(100% - 80px);\r\n    }\r\n  }\r\n\r\n\r\n\r\n.core-main{\r\n    background: #f2f2f2;\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n\r\n\r\n\r\n/* .card {\r\n\tborder:none;\r\n\tbox-shadow: 0 1px 2px #c3c3c3;\r\n    border-radius: 0;\r\n    margin-bottom: 10px;\r\n} */\r\n\r\n\r\n\r\n/* .card-body{\r\n    padding: .75rem;\r\n} */\r\n\r\n\r\n\r\n.card-comp {\r\n    /*background: #ededed;*/\r\n}\r\n\r\n\r\n\r\n/* .card-header {\r\n\r\n} */\r\n\r\n\r\n\r\n.text-center {\r\n    text-align: center!important;\r\n}\r\n\r\n\r\n\r\n.text-left {\r\n    text-align: left!important;\r\n}\r\n\r\n\r\n\r\n.text-right {\r\n    text-align: right!important;\r\n}\r\n\r\n\r\n\r\n.trSelected{\r\n    background-color: rgb(86, 61, 124, 0.15)  !important;\r\n}\r\n\r\n\r\n\r\n.rowSelected{\r\n    background-color: rgb(108, 117, 125, 0.1) !important;\r\n    box-shadow: 0 0 0 0.1rem   rgb(86, 61, 124, 0.75) ;\r\n}\r\n\r\n\r\n\r\n.panel-left {\r\n    border-right: 2px solid #DDDDDD;\r\n    padding-right: 15px;\r\n}\r\n\r\n\r\n\r\n.panel-z {\r\n    padding-top: 15px;\r\n\r\n    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n\r\n\r\n.panel-title {\r\n  float: left;\r\n  \r\n}\r\n\r\n\r\n\r\n.panel-tools {\r\n  float: right;\r\n  margin-top: 0;\r\n    margin-bottom: 0;\r\n    \r\n}\r\n\r\n\r\n\r\n.panel-tools:hover{\r\n\r\n}\r\n\r\n\r\n\r\n.mytoolbar {\r\n  flex-direction: row;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  max-height: 100%;\r\n  place-content: center space-between;\r\n  -webkit-justify-content: space-between;\r\n  align-items: center;\r\n\r\n\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\r\n  padding: 8px 12px;\r\n    margin-bottom: 0px;\r\n    margin-top: 0px;\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n.br-sha{\r\n  /* box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2); */\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\r\n  padding: 8px 12px;\r\n}\r\n\r\n\r\n\r\n.panel-tools a {\r\n  color: #8b91a0 !important;\r\n  background: none;\r\n}\r\n\r\n\r\n\r\n.grad-blue  {\r\n    background-color: #5f8295;\r\n    position: relative;\r\n    background: linear-gradient(to bottom,  #6c8fa1 0px, #5f8295 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#6c8fa1 0px', endColorStr='#5f8295 100%');\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.grad-purple {\r\n    background: #804c75;\r\n    position: relative;\r\n    background: linear-gradient(to bottom, #905684 0px, #804c75 100%);\r\n\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#905684 0px', endColorStr='#804c75 100%');\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.grad-secondary {\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n    position: relative;\r\n    background: linear-gradient(to bottom, #79838b 0px, #6c757d 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#79838b 0px', endColorStr='#6c757d 100%');\r\n    color: #000;\r\n}\r\n\r\n\r\n\r\n/* .btn{\r\n    color: white;\r\n}\r\n.btn-squared {\r\n    border-radius: 0 !important;\r\n    border: 1px solid transparent;\r\n    min-width: 76px;\r\n}\r\n\r\n.btn:focus, .btn:active, .btn.active  {\r\n    -webkit-box-shadow: 0px 0px 0px 3px rgb(86, 61, 124, 0.4) !important;\r\n    box-shadow: 0px 0px 0px 3px rgb(86, 61, 124, 0.4) !important;\r\n}\r\n\r\n.btn-purple {\r\n  background-color: #442456;\r\n  border-color: #331b41;\r\n  background: -moz-linear-gradient(top, #522c68 0px, #442456 100%);\r\n  background: -ms-linear-gradient(top, #522c68 0px, #442456 100%);\r\n  background: -webkit-linear-gradient(top, #522c68 0px, #442456 100%);\r\n  background: linear-gradient(to bottom, #522c68 0px, #442456 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#522c68 0px', endColorStr='#442456 100%');\r\n  color: white;\r\n}\r\n.btn-purple:hover, .btn-purple:focus, .btn-purple:active, .btn-purple.active {\r\n  background: -webkit-linear-gradient(top, #47265a 0px, #3a1f49 100%);\r\n  color: white;\r\n}\r\n\r\n.btn-purple.disabled, .btn-purple:disabled {\r\n    background-color: #442456;\r\n  border-color: #331b41;\r\n  background: -moz-linear-gradient(top, #522c68 0px, #442456 100%);\r\n  background: -ms-linear-gradient(top, #522c68 0px, #442456 100%);\r\n  background: -webkit-linear-gradient(top, #522c68 0px, #442456 100%);\r\n  background: linear-gradient(to bottom, #522c68 0px, #442456 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#522c68 0px', endColorStr='#442456 100%');\r\n  color: white;\r\n}\r\n\r\n.btn-secondary {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n\r\n    background: -moz-linear-gradient(top, #79838b 0px, #6c757d 100%);\r\n    background: -ms-linear-gradient(top, #79838b 0px, #6c757d 100%);\r\n    background: -webkit-linear-gradient(top, #79838b 0px, #6c757d 100%);\r\n    background: linear-gradient(to bottom, #79838b 0px, #6c757d 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#79838b 0px', endColorStr='#6c757d 100%');\r\n}\r\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active, .btn-secondary.active {\r\n    background: -webkit-linear-gradient(top, #6e777e 0px, #5b6369 100%);\r\n    color: white;\r\n  }\r\n.btn-secondary.disabled, .btn-secondary:disabled  {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n\r\n    background: -moz-linear-gradient(top, #79838b 0px, #6c757d 100%);\r\n    background: -ms-linear-gradient(top, #79838b 0px, #6c757d 100%);\r\n    background: -webkit-linear-gradient(top, #79838b 0px, #6c757d 100%);\r\n    background: linear-gradient(to bottom, #79838b 0px, #6c757d 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#79838b 0px', endColorStr='#6c757d 100%');\r\n} */\r\n\r\n\r\n\r\n.boxscroll {\r\n    overflow-x: auto;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n\r\n\r\n.pl-0{\r\n    padding-left: 0;\r\n\r\n}\r\n\r\n\r\n\r\n.globito{\r\n    color: #721c24;\r\n    background-color: #f0cbce;\r\n    border-color: #721c24;\r\n    border-radius: .25rem;\r\n    font-size: smaller;\r\n\r\n    display: block;\r\n\r\n    margin-top: 0.5rem;\r\n    margin-bottom: 0.5rem;\r\n\r\n    padding: 2px 4px;\r\n    min-height: 38px;\r\n    line-height: normal;\r\n}\r\n\r\n\r\n\r\n.globito::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 100%;\r\n    margin-top: -15px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: transparent #f0cbce transparent transparent;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 576px) {\r\n    .globito::after {\r\n        content: \"\";\r\n        top: 24%;\r\n        position: absolute;\r\n        bottom: 100%;\r\n        left: 50%;\r\n        margin-left: -5px;\r\n        border-width: 5px;\r\n        border-style: solid;\r\n        border-color: transparent transparent #f0cbce transparent;\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n.ng-invalid:not(form)  {\r\n    border-color: #d8949a ;\r\n\r\n  }\r\n\r\n\r\n\r\n.form-control:focus.ng-invalid:not(form){\r\n    border-color: #d8949a ;\r\n\r\n    box-shadow: 0 0 0 0.2rem rgba(219, 27, 36, 0.25)\r\n  }\r\n\r\n\r\n\r\n.active-link{\r\n    background-color: #442456;\r\n\r\n  }\r\n\r\n\r\n\r\n/* ---------------------------------------------------\r\n  new layout STYLE\r\n----------------------------------------------------- */\r\n\r\n\r\n\r\na{\r\n  color: rgba(0,0,0,.75);\r\n}\r\n\r\n\r\n\r\na:hover{\r\n  color: #9785a1;;\r\n}\r\n\r\n\r\n\r\n/*main-wrapper styles*/\r\n\r\n\r\n\r\n.main-wrapper {\r\n  position: relative;\r\n  background: #f3f4f4;\r\n}\r\n\r\n\r\n\r\n.main-wrapper > .inner-transform {\r\n transform: translate3d(0, 0, 0);\r\n\r\n}\r\n\r\n\r\n\r\n/*to nav style*/\r\n\r\n\r\n\r\n.topbar {\r\n  min-height: 65px !important;\r\n  border: none !important;\r\n}\r\n\r\n\r\n\r\n.navbar{\r\n  background: #fefefe;\r\n  padding: 15px 10px;\r\n  border: none;\r\n  border-radius: 0;\r\n  /* color: #fff; */\r\n  margin-bottom: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n\r\n\r\n.topbar .container {\r\n  max-width: none !important;\r\n  width: auto !important;\r\n}\r\n\r\n\r\n\r\n/*general styles */\r\n\r\n\r\n\r\n.container-fluid{\r\n  padding-right: 10px !important;\r\n}\r\n\r\n\r\n\r\n.btn-sm, .btn-group-sm>.btn {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n.btn-hid {\r\n  height: 100%;\r\n  margin-right: 10px;\r\n  margin-left: -5px;\r\n  margin-top: -15px;\r\n  margin-bottom: -15px;\r\n  min-height: 65px;\r\n  background: transparent;\r\n  color: inherit;\r\n  border: 0;\r\n}\r\n\r\n\r\n\r\n.btn-menu {\r\n  padding: 0;\r\n  background: transparent;\r\n  margin-top: 0;\r\n  color: inherit;\r\n\r\n}\r\n\r\n\r\n\r\n.btn.status i {\r\n  color: #1fbba6 !important;\r\n}\r\n\r\n\r\n\r\n.shadow {\r\n  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;\r\n}\r\n\r\n\r\n\r\n/*sidebar styles*/\r\n\r\n\r\n\r\n/*normal state*/\r\n\r\n\r\n\r\n#sidebar {\r\n  width: 200px;\r\n  z-index: 1021;\r\n  position: fixed;\r\n  top: 65px;\r\n  left: 0;\r\n  /* padding-top: 65px; */\r\n  background-color: #fefefe !important;\r\n  /* background-color: #7a5f8a !important; */\r\n  /* background-color: rgba(122, 95, 138, 0.3); */\r\n  transition: all 0.3s;\r\n\r\n}\r\n\r\n\r\n\r\n#sidebar .btn {\r\n  /* color: rgba(255, 255, 255, 0.5); */\r\n}\r\n\r\n\r\n\r\n.go-top {\r\n  cursor: pointer;\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  font-size: 16px;\r\n  margin-bottom: 0;\r\n  margin-right: 0;\r\n  text-decoration: none;\r\n  line-height: 50px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n#sidebar .navbar-content {\r\n  position: relative;\r\n  height: calc(100vh - 65px);\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n#sidebar .slide-tools {\r\n  min-height: 50px;\r\n  line-height: 50px;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 14;\r\n  left: 0;\r\n  bottom: 0;\r\n  /* background-color: rgba(122, 95, 138, 0.3); */\r\n  background: var(--color-primary-strong);\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n#sidebar.active{\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n#sidebar .navbar-content .sidebar-header {\r\n  padding: 20px;\r\n  background: var(--color-primary-strong);\r\n\r\n}\r\n\r\n\r\n\r\n#sidebar .navbar-content .sidebar-header #sidebarCollapse2 span {\r\n  display: inline-block;\r\n}\r\n\r\n\r\n\r\n#sidebar .navbar-content .components{\r\n  padding: 10px 0;\r\n  color: rgba(0,0,0,.75);\r\n  /* border-bottom: 1px solid #380a8b; */\r\n}\r\n\r\n\r\n\r\n/* normal staet*/\r\n\r\n\r\n\r\n#sidebar ul li a {\r\n  text-align: left;\r\n}\r\n\r\n\r\n\r\n#sidebar ul ul a {\r\n  padding: 10px !important;\r\n}\r\n\r\n\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n#sidebar ul li a:hover {\r\n  color: #47189c;\r\n  background: #fff;\r\n}\r\n\r\n\r\n\r\n#sidebar ul li a i {\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: var(--color-primary-strong);\r\n}\r\n\r\n\r\n\r\n/*compact state*/\r\n\r\n\r\n\r\n#sidebar.active2 {\r\n  min-width: 80px;\r\n  max-width: 80px;\r\n  /* text-align: center; */\r\n}\r\n\r\n\r\n\r\n#sidebar.active2 .navbar-content .sidebar-header #sidebarCollapse2 span {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n#sidebar.active2 .navbar-content .sidebar-header h3 {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n#sidebar.active2 ul li a {\r\n  padding: 20px 10px;\r\n  text-align: center;\r\n  font-size: 0.85em;\r\n}\r\n\r\n\r\n\r\n#sidebar.active2 ul li a i {\r\n  margin-right: 0;\r\n  display: block;\r\n  font-size: 1.8em;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n#sidebar.active2 .dropdown-toggle::after {\r\n  top: auto;\r\n  bottom: 10px;\r\n  right: 50%;\r\n  transform: translateX(50%);\r\n}\r\n\r\n\r\n\r\n/*simple*/\r\n\r\n\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background:rgba(169, 145, 212, 0.2);\r\n}\r\n\r\n\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #380a8b;\r\n}\r\n\r\n\r\n\r\na.article,\r\na.article:hover {\r\n  background: #47189c !important;\r\n  color: #fff !important;\r\n}\r\n\r\n\r\n\r\n/*main container style*/\r\n\r\n\r\n\r\n.main-container {\r\n  margin-top: 65px !important;\r\n  margin-left: 200px;\r\n  position: relative;\r\n  /* background-color: #22262f !important; */\r\n}\r\n\r\n\r\n\r\n.main-container.active {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n\r\n\r\n.main-container.active2 {\r\n  /* width:  calc(100% - 80px); */\r\n  margin-left: 80px;\r\n}\r\n\r\n\r\n\r\n.main-container .main-content {\r\n  position: relative !important;\r\n  left: 0 !important;\r\n  /* background: #fff; */\r\n  min-height: calc(100vh - 65px - 50px);\r\n  padding: 15px 15px;\r\n}\r\n\r\n\r\n\r\n/* .main-container .container {\r\n  max-width: none !important;\r\n  width: auto !important;\r\n  padding: 25px 15px;\r\n} */\r\n\r\n\r\n\r\n.main-container .container > .row, .main-container .container #ajax-content > .row {\r\n  padding: 10px;\r\n}\r\n\r\n\r\n\r\n/*footer style*/\r\n\r\n\r\n\r\nfooter {\r\n  font-size: 12px;\r\n  position: relative;\r\n  z-index: 1020;\r\n  border: none !important;\r\n  min-height: 50px;\r\n  /* background-color: #7a5f8a; */\r\n  background: var(--color-primary-strong);\r\n}\r\n\r\n\r\n\r\nfooter .footer-inner {\r\n  padding: 0 20px;\r\n  line-height: 50px;\r\n  margin-left: 200px;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\nfooter .footer-inner.active{\r\n  position: relative;\r\n  margin-left: 0 !important;\r\n}\r\n\r\n\r\n\r\nfooter .footer-inner.active2{\r\n  position: relative;\r\n  margin-left: 80px !important;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n  #sidebar {\r\n      min-width: 80px;\r\n      max-width: 80px;\r\n      /* text-align: center; */\r\n      /* margin-left: -80px !important; */\r\n  }\r\n  /* #sidebar {\r\n      margin-left: 0px;\r\n  } */\r\n  #sidebar .navbar-content .sidebar-header h3,\r\n  #sidebar .navbar-content .CTAs {\r\n      display: none;\r\n  }\r\n  #sidebar .navbar-content .sidebar-header #sidebarCollapse2 span {\r\n      display: none;\r\n  }\r\n  .dropdown-toggle::after {\r\n      top: auto;\r\n      bottom: 10px;\r\n      right: 50%;\r\n      transform: translateX(50%);\r\n  }\r\n  #sidebar ul li a {\r\n      padding: 20px 10px;\r\n  }\r\n  #sidebar ul li a {\r\n      /* padding: 10px !important; */\r\n      font-size: 0.85em;\r\n  }\r\n  #sidebar ul li a {\r\n      text-align: center;\r\n  }\r\n  #sidebar ul li a span {\r\n      font-size: 0.85em;\r\n  }\r\n  #sidebar ul li a i {\r\n      margin-right: 0;\r\n      display: block;\r\n  }\r\n  #sidebar ul li a i {\r\n      font-size: 1.8em;\r\n      margin-bottom: 5px;\r\n  }\r\n  #sidebarCollapse span {\r\n      display: none;\r\n  }\r\n\r\n  #sidebar.active2 {\r\n      min-width: 200px;\r\n      max-width: 200px;\r\n      z-index: 1021;\r\n      position: fixed;\r\n      top: 65;\r\n      left: 0;\r\n      /* padding-top: 65px; */\r\n      /* background-color: #7a5f8a !important; */\r\n  }\r\n  #sidebar.active {\r\n      /* margin-left: 0 !important; */\r\n  }\r\n  #sidebar.active2 .dropdown-toggle::after {\r\n      display: block;\r\n      position: absolute;\r\n      top: 50%;\r\n      right: 20px;\r\n      transform: translateY(-50%);\r\n  }\r\n  #sidebar.active2 .navbar-content .sidebar-header h3 {\r\n      display: block;\r\n      padding: 20px;\r\n      background: var(--color-primary-strong);\r\n  }\r\n  #sidebar.active2 .navbar-content .sidebar-header #sidebarCollapse2 span {\r\n      display: inline-block;\r\n  }\r\n  #sidebar.active2 .navbar-content .components{\r\n      padding: 10px 0;\r\n      border-bottom: 1px solid #380a8b;\r\n\r\n  }\r\n  #sidebar.active2 ul li a {\r\n      text-align: left;\r\n  }\r\n  #sidebar.active2 ul li a {\r\n      padding: 10px !important;\r\n  }\r\n  #sidebar.active2 ul li a {\r\n      padding: 10px;\r\n      font-size: 1.1em;\r\n      display: block;\r\n  }\r\n  #sidebar.active2 ul li a:hover {\r\n      color: #47189c;\r\n      background: #fff;\r\n  }\r\n  #sidebar.active2 ul li a i {\r\n      margin-right: 10px;\r\n      display: inline-block;\r\n      font-size: inherit;\r\n  }\r\n  #sidebar.active2 ul li.active>a,\r\n  a[aria-expanded=\"true\"] {\r\n      color: #fff;\r\n      background: var(--color-primary-strong);\r\n  }\r\n\r\n  .main-container {\r\n      margin-left: 80px;\r\n  }\r\n  .main-container.active2 {\r\n      margin-left: 200px;\r\n  }\r\n  .main-container.active {\r\n      margin-left: 0 !important;\r\n  }\r\n\r\n  footer .footer-inner {\r\n      margin-left: 80px;\r\n  }\r\n  footer .footer-inner.active{\r\n      margin-left: 0 !important;\r\n\r\n  }\r\n  footer .footer-inner.active2{\r\n      margin-left: 200px !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n/* nuevos estilos */\r\n\r\n\r\n\r\n.br-z{\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n\r\n\r\n.br-x{\r\n\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n\r\n\r\n.mytoolbar {\r\n  flex-direction: row;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  max-height: 100%;\r\n  place-content: center space-between;\r\n  -webkit-justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0px 0px;\r\n    margin-bottom: 0px;\r\n    margin-top: 0px;\r\n}\r\n\r\n\r\n\r\n.panel-tools {\r\n  float: right;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n.bg-prima {\r\n  background-color: #582d6e!important;\r\n}\r\n\r\n\r\n\r\n.bg-secon {\r\n  background-color: #341b44!important;\r\n}\r\n\r\n\r\n\r\n.bg-blanco {\r\n  background-color: #fafafa !important;\r\n}\r\n\r\n\r\n\r\n.br-sha{\r\n  /* box-shadow: 1px 1px 1px 1px rgba(0,0,0,.2); */\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\r\n  padding: 8px 12px;\r\n}\r\n\r\n\r\n\r\n.w-20 {\r\n  width: 20% !important;\r\n}\r\n\r\n\r\n\r\n.w-15 {\r\n  width: 15% !important;\r\n}\r\n\r\n\r\n\r\n.w-10 {\r\n  width: 10% !important;\r\n}\r\n\r\n\r\n\r\n.bg-bar {\r\n  background-color: rgba(0,0,0,0.03);\r\n}\r\n\r\n\r\n\r\n.mrl--5{\r\n  border: none;\r\n  border-left: 1px solid rgba(0,0,0,0.125);\r\n}\r\n\r\n\r\n\r\n.campoFormulario {\r\n  float: left;\r\n  /* margin-left: -15px; */\r\n}\r\n\r\n\r\n\r\n.show-err{\r\n  max-width: 40%; margin-top: -60px; float: right;\r\n}\r\n\r\n\r\n\r\n.boredere-left {\r\n  border: none;\r\n  border-left: 1px solid rgba(0,0,0,0.125);\r\n}\r\n\r\n\r\n\r\n.br-bot {\r\n  border-bottom: 1px solid rgba(0,0,0,0.125);\r\n}\r\n\r\n\r\n\r\n.pt-1{\r\n  padding: 0.25rem 0 0 0 !important;\r\n}\r\n\r\n\r\n\r\n.mrl-1{\r\n  margin: 0 0 0 -0.5rem !important;\r\n}\r\n\r\n\r\n\r\n/* nuevo estilo para tablas*/\r\n\r\n\r\n\r\n.table {\r\n  border: 1px solid #ddd;\r\n  display: block;\r\n  background: #fff;\r\n  overflow-y: hidden;\r\n  box-sizing: border-box;\r\n  float: left;\r\n  height:auto;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.table tbody, thead {\r\n  flex-direction: column;\r\n  display: flex;\r\n}\r\n\r\n\r\n\r\n.table tbody {\r\n  height: 600px;\r\n  overflow: auto;\r\n}\r\n\r\n\r\n\r\n.table thead {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n\r\n\r\n.table tr {\r\n  display: flex;\r\n}\r\n\r\n\r\n\r\n.table tbody tr:nth-child(2n+1) {\r\n  background: #f8f8f8;\r\n  }\r\n\r\n\r\n\r\n.table td, .ea_table th {\r\n  text-align: left;\r\n  font-size: 0.8rem;\r\n  padding: 1.5rem;\r\n  flex: 1;\r\n}\r\n\r\n\r\n\r\n/*\r\n.table {\r\n\r\n  border-top: 1px solid #dee2e6;\r\n  border-left: 1px solid #dee2e6;\r\n  margin-bottom: 0;\r\n  border-collapse: inherit;\r\n}\r\n\r\n.table thead th {\r\n\r\n  border-bottom: 0px solid #dee2e6;\r\n}\r\n\r\n.table thead {\r\n\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n\r\n.table td, .table th {\r\n\r\n  border-right: 1px solid #dee2e6;\r\n  border-top: 0px solid #dee2e6;\r\n}\r\n\r\n.table tbody tr {\r\n\r\n  border-bottom: 1px solid #dee2e6;\r\n}*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VudHJhbC9jZW50cmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7RUFDMUMsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7OztBQUlBO0lBQ0ksd0NBQXdDO0lBQ3hDLGtCQUFrQjtFQUNwQjs7OztBQUNBO0lBQ0UsY0FBYztJQUNkLFlBQVk7RUFDZDs7OztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtDQUErQztFQUNqRDs7OztBQUVBO0lBQ0UsV0FBVztFQUNiOzs7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7Ozs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7OztBQUNBO0lBQ0UsMENBQTBDO0VBQzVDOzs7O0FBQ0E7O3lEQUV1RDs7OztBQUN2RDtJQUNFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOzs7O0FBQ0E7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjs7OztBQUNBO0lBQ0U7TUFDRSxvQkFBb0I7TUFDcEIsd0JBQXdCO0lBQzFCO0VBQ0Y7Ozs7QUFJRjtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7Ozs7QUFFQTs7Ozs7R0FLRzs7OztBQUNIOztHQUVHOzs7O0FBQ0g7SUFDSSx1QkFBdUI7QUFDM0I7Ozs7QUFDQTs7R0FFRzs7OztBQUVIO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7O0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7Ozs7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7OztBQUNBO0lBQ0ksb0RBQW9EO0FBQ3hEOzs7O0FBRUE7SUFDSSxvREFBb0Q7SUFDcEQsa0RBQWtEO0FBQ3REOzs7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOzs7O0FBRUE7SUFDSSxpQkFBaUI7O0lBRWpCLG1HQUFtRztBQUN2Rzs7OztBQUVBO0VBQ0UsV0FBVzs7QUFFYjs7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7SUFDWCxnQkFBZ0I7O0FBRXBCOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLG1CQUFtQjs7O0VBR25CLG9FQUFvRTtFQUNwRSxpQkFBaUI7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTs7Ozs7O0FBTW5COzs7O0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQsb0VBQW9FO0VBQ3BFLGlCQUFpQjtBQUNuQjs7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7OztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUlsQixrRUFBa0U7SUFDbEUsMkdBQTJHO0lBQzNHLFlBQVk7QUFDaEI7Ozs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFJbEIsaUVBQWlFOztJQUVqRSwyR0FBMkc7SUFDM0csWUFBWTtBQUNoQjs7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFJbEIsaUVBQWlFO0lBQ2pFLDJHQUEyRztJQUMzRyxXQUFXO0FBQ2Y7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRUc7Ozs7QUFJSDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjs7OztBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGtCQUFrQjs7SUFFbEIsY0FBYzs7SUFFZCxrQkFBa0I7SUFDbEIscUJBQXFCOztJQUVyQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7OztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlEQUF5RDtBQUM3RDs7OztBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsUUFBUTtRQUNSLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osU0FBUztRQUNULGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHlEQUF5RDs7SUFFN0Q7QUFDSjs7OztBQUVFO0lBQ0Usc0JBQXNCOztFQUV4Qjs7OztBQUNBO0lBQ0Usc0JBQXNCOztJQUV0QjtFQUNGOzs7O0FBQ0E7SUFDRSx5QkFBeUI7O0VBRTNCOzs7O0FBR0Y7O3VEQUV1RDs7OztBQUN2RDtFQUNFLHNCQUFzQjtBQUN4Qjs7OztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7OztBQUNBLHNCQUFzQjs7OztBQUN0QjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7Ozs7QUFDQTtDQUdDLCtCQUErQjs7QUFFaEM7Ozs7QUFDQSxlQUFlOzs7O0FBQ2Y7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOzs7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7Ozs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7Ozs7QUFDQSxrQkFBa0I7Ozs7QUFDbEI7RUFDRSw4QkFBOEI7QUFDaEM7Ozs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7OztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7Ozs7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsU0FBUztBQUNYOzs7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjOztBQUVoQjs7OztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOzs7O0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7Ozs7QUFDQSxpQkFBaUI7Ozs7QUFDakIsZUFBZTs7OztBQUNmO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQywrQ0FBK0M7RUFDL0Msb0JBQW9COztBQUV0Qjs7OztBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDOzs7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7Ozs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOzs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxTQUFTO0VBQ1QsK0NBQStDO0VBQy9DLHVDQUF1QztFQUN2QyxXQUFXO0FBQ2I7Ozs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7OztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1Qzs7QUFFekM7Ozs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixzQ0FBc0M7QUFDeEM7Ozs7QUFDQSxnQkFBZ0I7Ozs7QUFDaEI7RUFDRSxnQkFBZ0I7QUFDbEI7Ozs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7OztBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOzs7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOzs7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7Ozs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsdUNBQXVDO0FBQ3pDOzs7O0FBQ0EsZ0JBQWdCOzs7O0FBQ2hCO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7Ozs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7OztBQUNBO0VBQ0UsYUFBYTtBQUNmOzs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7RUFHViwwQkFBMEI7QUFDNUI7Ozs7QUFDQSxTQUFTOzs7O0FBQ1Q7RUFDRSxrQkFBa0I7QUFDcEI7Ozs7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7Ozs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsbUNBQW1DO0FBQ3JDOzs7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7OztBQUNBOztFQUVFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7Ozs7QUFFQSx1QkFBdUI7Ozs7QUFDdkI7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7Ozs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7OztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGlCQUFpQjtBQUNuQjs7OztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjs7OztBQUNBOzs7O0dBSUc7Ozs7QUFDSDtFQUNFLGFBQWE7QUFDZjs7OztBQUNBLGVBQWU7Ozs7QUFDZjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLHVDQUF1QztBQUN6Qzs7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOzs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOzs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOzs7O0FBT0E7RUFDRTtNQUNJLGVBQWU7TUFDZixlQUFlO01BQ2Ysd0JBQXdCO01BQ3hCLG1DQUFtQztFQUN2QztFQUNBOztLQUVHO0VBQ0g7O01BRUksYUFBYTtFQUNqQjtFQUNBO01BQ0ksYUFBYTtFQUNqQjtFQUNBO01BQ0ksU0FBUztNQUNULFlBQVk7TUFDWixVQUFVO01BR1YsMEJBQTBCO0VBQzlCO0VBQ0E7TUFDSSxrQkFBa0I7RUFDdEI7RUFDQTtNQUNJLDhCQUE4QjtNQUM5QixpQkFBaUI7RUFDckI7RUFDQTtNQUNJLGtCQUFrQjtFQUN0QjtFQUNBO01BQ0ksaUJBQWlCO0VBQ3JCO0VBQ0E7TUFDSSxlQUFlO01BQ2YsY0FBYztFQUNsQjtFQUNBO01BQ0ksZ0JBQWdCO01BQ2hCLGtCQUFrQjtFQUN0QjtFQUNBO01BQ0ksYUFBYTtFQUNqQjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGVBQWU7TUFDZixPQUFPO01BQ1AsT0FBTztNQUNQLHVCQUF1QjtNQUN2QiwwQ0FBMEM7RUFDOUM7RUFDQTtNQUNJLCtCQUErQjtFQUNuQztFQUNBO01BQ0ksY0FBYztNQUNkLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsV0FBVztNQUNYLDJCQUEyQjtFQUMvQjtFQUNBO01BQ0ksY0FBYztNQUNkLGFBQWE7TUFDYix1Q0FBdUM7RUFDM0M7RUFDQTtNQUNJLHFCQUFxQjtFQUN6QjtFQUNBO01BQ0ksZUFBZTtNQUNmLGdDQUFnQzs7RUFFcEM7RUFDQTtNQUNJLGdCQUFnQjtFQUNwQjtFQUNBO01BQ0ksd0JBQXdCO0VBQzVCO0VBQ0E7TUFDSSxhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLGNBQWM7RUFDbEI7RUFDQTtNQUNJLGNBQWM7TUFDZCxnQkFBZ0I7RUFDcEI7RUFDQTtNQUNJLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsa0JBQWtCO0VBQ3RCO0VBQ0E7O01BRUksV0FBVztNQUNYLHVDQUF1QztFQUMzQzs7RUFFQTtNQUNJLGlCQUFpQjtFQUNyQjtFQUNBO01BQ0ksa0JBQWtCO0VBQ3RCO0VBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7O0VBRUE7TUFDSSxpQkFBaUI7RUFDckI7RUFDQTtNQUNJLHlCQUF5Qjs7RUFFN0I7RUFDQTtNQUNJLDZCQUE2QjtFQUNqQztBQUNGOzs7O0FBRUEsbUJBQW1COzs7O0FBRW5CO0VBQ0UsNEdBQTRHO0FBQzlHOzs7O0FBQ0E7O0VBRUUsbUdBQW1HO0FBQ3JHOzs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7Ozs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOzs7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7Ozs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7OztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOzs7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsb0VBQW9FO0VBQ3BFLGlCQUFpQjtBQUNuQjs7OztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7Ozs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7OztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOzs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOzs7O0FBRUE7RUFDRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsWUFBWTtBQUNqRDs7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdDQUF3QztBQUMxQzs7OztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOzs7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7Ozs7QUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7OztBQUVBLDRCQUE0Qjs7OztBQUM1QjtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0FBQ2I7Ozs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7Ozs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOzs7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7Ozs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7OztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25COzs7O0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixPQUFPO0FBQ1Q7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRCRSIsImZpbGUiOiJzcmMvYXBwL2NlbnRyYWwvY2VudHJhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjsgKi9cclxuICAvKiBmb250LXdlaWdodDogNDAwOyAqL1xyXG4gIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cclxufVxyXG5cclxuXHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEyLCA2MCwgMTM1LCAuMSk7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuICAuZEdydXBvQ29tcG9uZW50ZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweCAwIDMwcHggMDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgxMTIsIDYwLCAxMzUsIC4zKTtcclxuICB9XHJcblxyXG4gIC5jYW1wb0Zvcm11bGFyaW8ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBkaXYgPiBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLmJOYXZlZ2FjaW9uIHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXIge1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIFNJREVCQVIgU1RZTEVcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgfVxyXG4gICNjb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICNjb250ZW50IHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbi5jb3JlLW1haW57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLyogLmNhcmQge1xyXG5cdGJvcmRlcjpub25lO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYzNjM2MzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0gKi9cclxuLyogLmNhcmQtYm9keXtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxufSAqL1xyXG4uY2FyZC1jb21wIHtcclxuICAgIC8qYmFja2dyb3VuZDogI2VkZWRlZDsqL1xyXG59XHJcbi8qIC5jYXJkLWhlYWRlciB7XHJcblxyXG59ICovXHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcclxufVxyXG4udHJTZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgNjEsIDEyNCwgMC4xNSkgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3dTZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDgsIDExNywgMTI1LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gICByZ2IoODYsIDYxLCAxMjQsIDAuNzUpIDtcclxufVxyXG5cclxuLnBhbmVsLWxlZnQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0RERERERDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5wYW5lbC16IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnBhbmVsLXRpdGxlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBcclxufVxyXG5cclxuLnBhbmVsLXRvb2xzIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBcclxufVxyXG4ucGFuZWwtdG9vbHM6aG92ZXJ7XHJcblxyXG59XHJcbi5teXRvb2xiYXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHNwYWNlLWJldHdlZW47XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNiksIDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuLmJyLXNoYXtcclxuICAvKiBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMik7ICovXHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjE2KSwgMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbn1cclxuXHJcbi5wYW5lbC10b29scyBhIHtcclxuICBjb2xvcjogIzhiOTFhMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLmdyYWQtYmx1ZSAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmODI5NTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzZjOGZhMSAwcHgsICM1ZjgyOTUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzZjOGZhMSAwcHgsICM1ZjgyOTUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM2YzhmYTEgMHB4LCAjNWY4Mjk1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICM2YzhmYTEgMHB4LCAjNWY4Mjk1IDEwMCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvclN0cj0nIzZjOGZhMSAwcHgnLCBlbmRDb2xvclN0cj0nIzVmODI5NSAxMDAlJyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmdyYWQtcHVycGxlIHtcclxuICAgIGJhY2tncm91bmQ6ICM4MDRjNzU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM5MDU2ODQgMHB4LCAjODA0Yzc1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICM5MDU2ODQgMHB4LCAjODA0Yzc1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjOTA1Njg0IDBweCwgIzgwNGM3NSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5MDU2ODQgMHB4LCAjODA0Yzc1IDEwMCUpO1xyXG5cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyM5MDU2ODQgMHB4JywgZW5kQ29sb3JTdHI9JyM4MDRjNzUgMTAwJScpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3JhZC1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzc5ODM4YiAwcHgsICM2Yzc1N2QgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzc5ODM4YiAwcHgsICM2Yzc1N2QgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM3OTgzOGIgMHB4LCAjNmM3NTdkIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzc5ODM4YiAwcHgsICM2Yzc1N2QgMTAwJSk7XHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yU3RyPScjNzk4MzhiIDBweCcsIGVuZENvbG9yU3RyPScjNmM3NTdkIDEwMCUnKTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi8qIC5idG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1zcXVhcmVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgbWluLXdpZHRoOiA3NnB4O1xyXG59XHJcblxyXG4uYnRuOmZvY3VzLCAuYnRuOmFjdGl2ZSwgLmJ0bi5hY3RpdmUgIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4IHJnYig4NiwgNjEsIDEyNCwgMC40KSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4IHJnYig4NiwgNjEsIDEyNCwgMC40KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXB1cnBsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0MjQ1NjtcclxuICBib3JkZXItY29sb3I6ICMzMzFiNDE7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjNTIyYzY4IDBweCwgIzQ0MjQ1NiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzUyMmM2OCAwcHgsICM0NDI0NTYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNTIyYzY4IDBweCwgIzQ0MjQ1NiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTIyYzY4IDBweCwgIzQ0MjQ1NiAxMDAlKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yU3RyPScjNTIyYzY4IDBweCcsIGVuZENvbG9yU3RyPScjNDQyNDU2IDEwMCUnKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1wdXJwbGU6aG92ZXIsIC5idG4tcHVycGxlOmZvY3VzLCAuYnRuLXB1cnBsZTphY3RpdmUsIC5idG4tcHVycGxlLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNDcyNjVhIDBweCwgIzNhMWY0OSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tcHVycGxlLmRpc2FibGVkLCAuYnRuLXB1cnBsZTpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQyNDU2O1xyXG4gIGJvcmRlci1jb2xvcjogIzMzMWI0MTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM1MjJjNjggMHB4LCAjNDQyNDU2IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjNTIyYzY4IDBweCwgIzQ0MjQ1NiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM1MjJjNjggMHB4LCAjNDQyNDU2IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1MjJjNjggMHB4LCAjNDQyNDU2IDEwMCUpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyM1MjJjNjggMHB4JywgZW5kQ29sb3JTdHI9JyM0NDI0NTYgMTAwJScpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xyXG5cclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzc5ODM4YiAwcHgsICM2Yzc1N2QgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzc5ODM4YiAwcHgsICM2Yzc1N2QgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM3OTgzOGIgMHB4LCAjNmM3NTdkIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzc5ODM4YiAwcHgsICM2Yzc1N2QgMTAwJSk7XHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yU3RyPScjNzk4MzhiIDBweCcsIGVuZENvbG9yU3RyPScjNmM3NTdkIDEwMCUnKTtcclxufVxyXG4uYnRuLXNlY29uZGFyeTpob3ZlciwgLmJ0bi1zZWNvbmRhcnk6Zm9jdXMsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZSwgLmJ0bi1zZWNvbmRhcnkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzZlNzc3ZSAwcHgsICM1YjYzNjkgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4uYnRuLXNlY29uZGFyeS5kaXNhYmxlZCwgLmJ0bi1zZWNvbmRhcnk6ZGlzYWJsZWQgIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM3OTgzOGIgMHB4LCAjNmM3NTdkIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICM3OTgzOGIgMHB4LCAjNmM3NTdkIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNzk4MzhiIDBweCwgIzZjNzU3ZCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3OTgzOGIgMHB4LCAjNmM3NTdkIDEwMCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvclN0cj0nIzc5ODM4YiAwcHgnLCBlbmRDb2xvclN0cj0nIzZjNzU3ZCAxMDAlJyk7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuLmJveHNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5wbC0we1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG5cclxufVxyXG4uZ2xvYml0b3tcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwY2JjZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzcyMWMyNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblxyXG4gICAgcGFkZGluZzogMnB4IDRweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbi5nbG9iaXRvOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjBjYmNlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmdsb2JpdG86OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHRvcDogMjQlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjBjYmNlIHRyYW5zcGFyZW50O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuICAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q4OTQ5YSA7XHJcblxyXG4gIH1cclxuICAuZm9ybS1jb250cm9sOmZvY3VzLm5nLWludmFsaWQ6bm90KGZvcm0pe1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDg5NDlhIDtcclxuXHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMTksIDI3LCAzNiwgMC4yNSlcclxuICB9XHJcbiAgLmFjdGl2ZS1saW5re1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0MjQ1NjtcclxuXHJcbiAgfVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIG5ldyBsYXlvdXQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuYXtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuNzUpO1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgY29sb3I6ICM5Nzg1YTE7O1xyXG59XHJcbi8qbWFpbi13cmFwcGVyIHN0eWxlcyovXHJcbi5tYWluLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZjNmNGY0O1xyXG59XHJcbi5tYWluLXdyYXBwZXIgPiAuaW5uZXItdHJhbnNmb3JtIHtcclxuIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuXHJcbn1cclxuLyp0byBuYXYgc3R5bGUqL1xyXG4udG9wYmFyIHtcclxuICBtaW4taGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhcntcclxuICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICAvKiBjb2xvcjogI2ZmZjsgKi9cclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4udG9wYmFyIC5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLypnZW5lcmFsIHN0eWxlcyAqL1xyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4uYnRuLXNtLCAuYnRuLWdyb3VwLXNtPi5idG4ge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4ubmF2YmFyLWJ0biB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5idG4taGlkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi5idG4tbWVudSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG5cclxufVxyXG4uYnRuLnN0YXR1cyBpIHtcclxuICBjb2xvcjogIzFmYmJhNiAhaW1wb3J0YW50O1xyXG59XHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLDAsMCwwLjE1KSAhaW1wb3J0YW50O1xyXG59XHJcbi8qc2lkZWJhciBzdHlsZXMqL1xyXG4vKm5vcm1hbCBzdGF0ZSovXHJcbiNzaWRlYmFyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgei1pbmRleDogMTAyMTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA2NXB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgLyogcGFkZGluZy10b3A6IDY1cHg7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZSAhaW1wb3J0YW50O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM3YTVmOGEgIWltcG9ydGFudDsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgOTUsIDEzOCwgMC4zKTsgKi9cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbn1cclxuI3NpZGViYXIgLmJ0biB7XHJcbiAgLyogY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgKi9cclxufVxyXG4uZ28tdG9wIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc2lkZWJhciAubmF2YmFyLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI3NpZGViYXIgLnNsaWRlLXRvb2xzIHtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxNDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgOTUsIDEzOCwgMC4zKTsgKi9cclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXN0cm9uZyk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNzaWRlYmFyIC5uYXZiYXItY29udGVudCAuc2lkZWJhci1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1zdHJvbmcpO1xyXG5cclxufVxyXG5cclxuI3NpZGViYXIgLm5hdmJhci1jb250ZW50IC5zaWRlYmFyLWhlYWRlciAjc2lkZWJhckNvbGxhcHNlMiBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuI3NpZGViYXIgLm5hdmJhci1jb250ZW50IC5jb21wb25lbnRze1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuNzUpO1xyXG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzgwYThiOyAqL1xyXG59XHJcbi8qIG5vcm1hbCBzdGFldCovXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuI3NpZGViYXIgdWwgdWwgYSB7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcclxuICBjb2xvcjogIzQ3MTg5YztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXN0cm9uZyk7XHJcbn1cclxuLypjb21wYWN0IHN0YXRlKi9cclxuI3NpZGViYXIuYWN0aXZlMiB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbn1cclxuI3NpZGViYXIuYWN0aXZlMiAubmF2YmFyLWNvbnRlbnQgLnNpZGViYXItaGVhZGVyICNzaWRlYmFyQ29sbGFwc2UyIHNwYW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3NpZGViYXIuYWN0aXZlMiAubmF2YmFyLWNvbnRlbnQgLnNpZGViYXItaGVhZGVyIGgzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNzaWRlYmFyLmFjdGl2ZTIgdWwgbGkgYSB7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuODVlbTtcclxufVxyXG4jc2lkZWJhci5hY3RpdmUyIHVsIGxpIGEgaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiNzaWRlYmFyLmFjdGl2ZTIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIHRvcDogYXV0bztcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxufVxyXG4vKnNpbXBsZSovXHJcbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbnVsIHVsIGEge1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOnJnYmEoMTY5LCAxNDUsIDIxMiwgMC4yKTtcclxufVxyXG5hLmRvd25sb2FkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMzgwYThiO1xyXG59XHJcbmEuYXJ0aWNsZSxcclxuYS5hcnRpY2xlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNDcxODljICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyptYWluIGNvbnRhaW5lciBzdHlsZSovXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzIyMjYyZiAhaW1wb3J0YW50OyAqL1xyXG59XHJcbi5tYWluLWNvbnRhaW5lci5hY3RpdmUge1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1haW4tY29udGFpbmVyLmFjdGl2ZTIge1xyXG4gIC8qIHdpZHRoOiAgY2FsYygxMDAlIC0gODBweCk7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbn1cclxuLm1haW4tY29udGFpbmVyIC5tYWluLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4IC0gNTBweCk7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4O1xyXG59XHJcbi8qIC5tYWluLWNvbnRhaW5lciAuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDI1cHggMTVweDtcclxufSAqL1xyXG4ubWFpbi1jb250YWluZXIgLmNvbnRhaW5lciA+IC5yb3csIC5tYWluLWNvbnRhaW5lciAuY29udGFpbmVyICNhamF4LWNvbnRlbnQgPiAucm93IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi8qZm9vdGVyIHN0eWxlKi9cclxuZm9vdGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwMjA7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E1ZjhhOyAqL1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktc3Ryb25nKTtcclxufVxyXG5mb290ZXIgLmZvb3Rlci1pbm5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuZm9vdGVyIC5mb290ZXItaW5uZXIuYWN0aXZle1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcbmZvb3RlciAuZm9vdGVyLWlubmVyLmFjdGl2ZTJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgI3NpZGViYXIge1xyXG4gICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAvKiBtYXJnaW4tbGVmdDogLTgwcHggIWltcG9ydGFudDsgKi9cclxuICB9XHJcbiAgLyogI3NpZGViYXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH0gKi9cclxuICAjc2lkZWJhciAubmF2YmFyLWNvbnRlbnQgLnNpZGViYXItaGVhZGVyIGgzLFxyXG4gICNzaWRlYmFyIC5uYXZiYXItY29udGVudCAuQ1RBcyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNzaWRlYmFyIC5uYXZiYXItY29udGVudCAuc2lkZWJhci1oZWFkZXIgI3NpZGViYXJDb2xsYXBzZTIgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbiAgfVxyXG4gICNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgfVxyXG4gICNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgICAvKiBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gIH1cclxuICAjc2lkZWJhciB1bCBsaSBhIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAjc2lkZWJhciB1bCBsaSBhIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuODVlbTtcclxuICB9XHJcbiAgI3NpZGViYXIgdWwgbGkgYSBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgI3NpZGViYXIgdWwgbGkgYSBpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI3NpZGViYXIuYWN0aXZlMiB7XHJcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgIHotaW5kZXg6IDEwMjE7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiA2NTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgLyogcGFkZGluZy10b3A6IDY1cHg7ICovXHJcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM3YTVmOGEgIWltcG9ydGFudDsgKi9cclxuICB9XHJcbiAgI3NpZGViYXIuYWN0aXZlIHtcclxuICAgICAgLyogbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDsgKi9cclxuICB9XHJcbiAgI3NpZGViYXIuYWN0aXZlMiAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICByaWdodDogMjBweDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICAjc2lkZWJhci5hY3RpdmUyIC5uYXZiYXItY29udGVudCAuc2lkZWJhci1oZWFkZXIgaDMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1zdHJvbmcpO1xyXG4gIH1cclxuICAjc2lkZWJhci5hY3RpdmUyIC5uYXZiYXItY29udGVudCAuc2lkZWJhci1oZWFkZXIgI3NpZGViYXJDb2xsYXBzZTIgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgI3NpZGViYXIuYWN0aXZlMiAubmF2YmFyLWNvbnRlbnQgLmNvbXBvbmVudHN7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzODBhOGI7XHJcblxyXG4gIH1cclxuICAjc2lkZWJhci5hY3RpdmUyIHVsIGxpIGEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAjc2lkZWJhci5hY3RpdmUyIHVsIGxpIGEge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICNzaWRlYmFyLmFjdGl2ZTIgdWwgbGkgYSB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAjc2lkZWJhci5hY3RpdmUyIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzQ3MTg5YztcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgI3NpZGViYXIuYWN0aXZlMiB1bCBsaSBhIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIH1cclxuICAjc2lkZWJhci5hY3RpdmUyIHVsIGxpLmFjdGl2ZT5hLFxyXG4gIGFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1zdHJvbmcpO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgfVxyXG4gIC5tYWluLWNvbnRhaW5lci5hY3RpdmUyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIH1cclxuICAubWFpbi1jb250YWluZXIuYWN0aXZlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGZvb3RlciAuZm9vdGVyLWlubmVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgfVxyXG4gIGZvb3RlciAuZm9vdGVyLWlubmVyLmFjdGl2ZXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIGZvb3RlciAuZm9vdGVyLWlubmVyLmFjdGl2ZTJ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyogbnVldm9zIGVzdGlsb3MgKi9cclxuXHJcbi5ici16e1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG4uYnIteHtcclxuXHJcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4ubXl0b29sYmFyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBzcGFjZS1iZXR3ZWVuO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMHB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ucGFuZWwtdG9vbHMge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5iZy1wcmltYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4MmQ2ZSFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLXNlY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQxYjQ0IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWJsYW5jbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnItc2hhe1xyXG4gIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLC4yKTsgKi9cclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLDAuMTYpLCAwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxufVxyXG4udy0yMCB7XHJcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcbi53LTE1IHtcclxuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnctMTAge1xyXG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjAzKTtcclxufVxyXG5cclxuLm1ybC0tNXtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTI1KTtcclxufVxyXG5cclxuLmNhbXBvRm9ybXVsYXJpbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IC0xNXB4OyAqL1xyXG59XHJcblxyXG4uc2hvdy1lcnJ7XHJcbiAgbWF4LXdpZHRoOiA0MCU7IG1hcmdpbi10b3A6IC02MHB4OyBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5ib3JlZGVyZS1sZWZ0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTI1KTtcclxufVxyXG5cclxuLmJyLWJvdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xMjUpO1xyXG59XHJcblxyXG4ucHQtMXtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAgMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1ybC0xe1xyXG4gIG1hcmdpbjogMCAwIDAgLTAuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBudWV2byBlc3RpbG8gcGFyYSB0YWJsYXMqL1xyXG4udGFibGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6YXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlIHRib2R5LCB0aGVhZCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi50YWJsZSB0ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbi50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoMm4rMSkge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgfVxyXG5cclxuLnRhYmxlIHRkLCAuZWFfdGFibGUgdGgge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi8qXHJcbi50YWJsZSB7XHJcblxyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB7XHJcblxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XHJcblxyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSB0Ym9keSB0ciB7XHJcblxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59Ki8iXX0= */");

/***/ }),

/***/ "./src/app/central/central.component.ts":
/*!**********************************************!*\
  !*** ./src/app/central/central.component.ts ***!
  \**********************************************/
/*! exports provided: CentralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralComponent", function() { return CentralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CentralComponent = class CentralComponent {
    constructor() { }
    ngOnInit() {
    }
};
CentralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-central',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./central.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/central.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./central.component.css */ "./src/app/central/central.component.css")).default]
    })
], CentralComponent);



/***/ }),

/***/ "./src/app/central/central.module.ts":
/*!*******************************************!*\
  !*** ./src/app/central/central.module.ts ***!
  \*******************************************/
/*! exports provided: CentralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralModule", function() { return CentralModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _central_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./central-routing.module */ "./src/app/central/central-routing.module.ts");
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ "./src/app/central/layouts/navbar/navbar.component.ts");
/* harmony import */ var _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/sidebar/sidebar.component */ "./src/app/central/layouts/sidebar/sidebar.component.ts");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "./src/app/central/layouts/footer/footer.component.ts");
/* harmony import */ var _views_combo_combo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/combo/combo.component */ "./src/app/central/views/combo/combo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _central_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./central.component */ "./src/app/central/central.component.ts");
/* harmony import */ var _views_context_context_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/context/context.component */ "./src/app/central/views/context/context.component.ts");
/* harmony import */ var _views_type_context_type_context_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/type-context/type-context.component */ "./src/app/central/views/type-context/type-context.component.ts");
/* harmony import */ var _pipes_context_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pipes/context.pipe */ "./src/app/pipes/context.pipe.ts");














let CentralModule = class CentralModule {
};
CentralModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _central_component__WEBPACK_IMPORTED_MODULE_10__["CentralComponent"],
            _views_combo_combo_component__WEBPACK_IMPORTED_MODULE_8__["ComboComponent"],
            _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
            _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _views_context_context_component__WEBPACK_IMPORTED_MODULE_11__["ContextComponent"], _views_type_context_type_context_component__WEBPACK_IMPORTED_MODULE_12__["TypeContextComponent"], _pipes_context_pipe__WEBPACK_IMPORTED_MODULE_13__["ContextPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _central_routing_module__WEBPACK_IMPORTED_MODULE_4__["CentralRoutingModule"]
        ]
    })
], CentralModule);



/***/ }),

/***/ "./src/app/central/layouts/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/central/layouts/footer/footer.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRyYWwvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/central/layouts/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/central/layouts/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/layouts/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/central/layouts/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/central/layouts/navbar/navbar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/central/layouts/navbar/navbar.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRyYWwvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/central/layouts/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/central/layouts/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");



let NavbarComponent = class NavbarComponent {
    constructor() {
        this.lista = [];
    }
    ngOnInit() {
        this.lista = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["globalConfigurations"]['userCompany'];
        console.log(this.lista);
    }
    verificar() {
        console.log(src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["globalConfigurations"]['userCompany']);
    }
    cerrarSesion() {
        localStorage.clear();
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/layouts/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/central/layouts/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/central/layouts/sidebar/sidebar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/central/layouts/sidebar/sidebar.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRyYWwvbGF5b3V0cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/central/layouts/sidebar/sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/central/layouts/sidebar/sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var misc = {
    sidebar_mini_active: true
};
//Menu Items
const ROUTES = [
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
let SidebarComponent = class SidebarComponent {
    constructor() {
        this.isCollapsed = true;
    }
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
            while (element.getAttribute("data-toggle") != "collapse" &&
                element != document.getElementsByTagName("html")[0]) {
                element = element.parentNode;
            }
            element = element.parentNode.children[1];
            if (element.classList.contains("collapse") &&
                !element.classList.contains("show")) {
                element.classList = "before-collapsing";
                var style = element.scrollHeight;
                element.classList = "collapsing";
                setTimeout(function () {
                    element.setAttribute("style", "height:" + style + "px");
                }, 1);
                setTimeout(function () {
                    element.classList = "collapse show";
                    element.removeAttribute("style");
                    menuitem.isCollapsing = undefined;
                }, 350);
            }
            else {
                var style = element.scrollHeight;
                setTimeout(function () {
                    element.setAttribute("style", "height:" + (style + 20) + "px");
                }, 3);
                setTimeout(function () {
                    element.classList = "collapsing";
                }, 3);
                setTimeout(function () {
                    element.removeAttribute("style");
                }, 20);
                setTimeout(function () {
                    element.classList = "collapse";
                    menuitem.isCollapsing = undefined;
                }, 400);
            }
        }
    }
    minimizeSidebar() {
        const body = document.getElementsByTagName('body')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            body.classList.add('sidebar-mini');
            misc.sidebar_mini_active = true;
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        const simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    }
    showSidebarMessage(message) {
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
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/layouts/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/central/layouts/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/central/views/combo/combo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/central/views/combo/combo.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRyYWwvdmlld3MvY29tYm8vY29tYm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/central/views/combo/combo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/central/views/combo/combo.component.ts ***!
  \********************************************************/
/*! exports provided: ComboComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboComponent", function() { return ComboComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_view_model_dataset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view-model/dataset */ "./src/app/view-model/dataset.ts");





let ComboComponent = class ComboComponent {
    constructor(conexionService) {
        this.conexionService = conexionService;
        this.ListContext = [];
        this.ListCtxVal = [];
        this.ListFamily = [];
        this.ListFamVal = [];
        this.myData = new src_app_view_model_dataset__WEBPACK_IMPORTED_MODULE_4__["DataSet"]();
    }
    ngOnInit() {
        this.conexionService.get_data('location').subscribe(res => {
            console.log('location', res);
            this.myData.Data = res;
            this.myData.initData();
        });
        this.conexionService.get_data('typecontext').subscribe(res => {
            console.log('typecontext', res);
            this.ListContext = res;
            this.toSort();
        });
        this.conexionService.get_data('location').subscribe(res => {
            console.log('location genSort', res);
            this.ListFamily = res; //aqui aumento logica
            this.genSort(this.ListFamily, this.ListFamVal);
        });
    }
    //methods  
    editContext() {
        this.myData.toEdit();
    }
    selectContext(contexto) {
        this.myData.toSelect(contexto);
    }
    toSort() {
        for (let i = 0; i < this.ListContext.length; i++) {
            let ctx = this.ListContext[i];
            if (ctx.estado == 1) {
                this.ListCtxVal.push(ctx);
            }
        }
        this.ListContext = this.ListContext.sort((a, b) => {
            if (a.name < b.name)
                return -1;
            else if (a.name > b.name)
                return 1;
            else
                return 0;
        });
    }
    genSort(xlist, xval) {
        for (let i = 0; i < xlist.length; i++) {
            let xl = xlist[i];
            if (xl['estado'] == 1) {
                xval.push(xl);
            }
        }
        xlist = xlist.sort((a, b) => {
            if (a['name'] < b['name'])
                return -1;
            else if (a['name'] > b['name'])
                return 1;
            else
                return 0;
        });
    }
    addContext() {
        this.myData.toNew(new src_app_models_schema__WEBPACK_IMPORTED_MODULE_2__["Location"](undefined, '', '', 0, undefined, 1, undefined, '', undefined));
    }
    cancelContext() {
        this.myData.toCancel();
    }
    saveContext() {
        if (this.myData.mode == 'edit') {
            this.conexionService.editObject('location', this.myData.xCurrent).subscribe(res => {
                this.myData.toSave(res);
            }, error => {
                var errorMessage = error;
                console.log('xerror:', errorMessage);
            });
        }
        else {
            this.conexionService.addObject('location', this.myData.xCurrent).subscribe(res => {
                this.myData.toSave(res);
            }, error => {
                var errorMessage = error;
                console.log('xerror:', errorMessage);
            });
        }
    }
};
ComboComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] }
];
ComboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-combo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./combo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/views/combo/combo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../central.component.css */ "./src/app/central/central.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./combo.component.css */ "./src/app/central/views/combo/combo.component.css")).default]
    })
], ComboComponent);



/***/ }),

/***/ "./src/app/central/views/context/context.component.css":
/*!*************************************************************!*\
  !*** ./src/app/central/views/context/context.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRyYWwvdmlld3MvY29udGV4dC9jb250ZXh0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/central/views/context/context.component.ts":
/*!************************************************************!*\
  !*** ./src/app/central/views/context/context.component.ts ***!
  \************************************************************/
/*! exports provided: ContextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextComponent", function() { return ContextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var src_app_view_model_dataset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view-model/dataset */ "./src/app/view-model/dataset.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");





let ContextComponent = class ContextComponent {
    constructor(conexionService) {
        this.conexionService = conexionService;
        this.ListContext = [];
        this.myData = new src_app_view_model_dataset__WEBPACK_IMPORTED_MODULE_3__["DataSet"]();
    }
    ngOnInit() {
        this.conexionService.get_data('contextact').subscribe(res => {
            this.myData.Data = res;
            this.myData.initData();
        });
        this.conexionService.get_data('context').subscribe(res => {
            this.ListContext = res;
            this.toSort();
        });
    }
    //methods
    editContext() {
        this.myData.toEdit();
    }
    selectContext(contexto) {
        this.myData.toSelect(contexto);
    }
    toSort() {
        this.ListContext = this.ListContext.sort((a, b) => {
            if (a.name < b.name)
                return -1;
            else if (a.name > b.name)
                return 1;
            else
                return 0;
        });
    }
    addContext() {
        this.myData.toNew(new src_app_models_schema__WEBPACK_IMPORTED_MODULE_2__["Contexto"](undefined, '', '', '', 1, undefined));
    }
    cancelContext() {
        this.myData.toCancel();
    }
    saveContext() {
        if (this.myData.mode == 'edit') {
            this.conexionService.editObject('context', this.myData.xCurrent).subscribe(res => {
                this.myData.toSave(res);
            }, error => {
                var errorMessage = error;
                console.log('xerror:', errorMessage);
            });
        }
        else {
            this.conexionService.addObject('context', this.myData.xCurrent).subscribe(res => {
                this.myData.toSave(res);
            }, error => {
                var errorMessage = error;
                console.log('xerror:', errorMessage);
            });
        }
    }
};
ContextComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_4__["ConnexionService"] }
];
ContextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-context',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./context.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/views/context/context.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../central.component.css */ "./src/app/central/central.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./context.component.css */ "./src/app/central/views/context/context.component.css")).default]
    })
], ContextComponent);



/***/ }),

/***/ "./src/app/central/views/type-context/type-context.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/central/views/type-context/type-context.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRyYWwvdmlld3MvdHlwZS1jb250ZXh0L3R5cGUtY29udGV4dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/central/views/type-context/type-context.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/central/views/type-context/type-context.component.ts ***!
  \**********************************************************************/
/*! exports provided: TypeContextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeContextComponent", function() { return TypeContextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_view_model_dataset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view-model/dataset */ "./src/app/view-model/dataset.ts");





let TypeContextComponent = class TypeContextComponent {
    constructor(conexionService) {
        this.conexionService = conexionService;
        this.ListContext = [];
        this.ListCtxVal = [];
        this.myData = new src_app_view_model_dataset__WEBPACK_IMPORTED_MODULE_4__["DataSet"]();
    }
    ngOnInit() {
        this.conexionService.get_data('typecontext').subscribe(res => {
            this.myData.Data = res;
            this.myData.initData();
        });
        this.conexionService.get_data('context').subscribe(res => {
            this.ListContext = res;
            this.toSort();
        });
    }
    //methods
    editContext() {
        this.myData.toEdit();
    }
    selectContext(contexto) {
        this.myData.toSelect(contexto);
    }
    toSort() {
        for (let i = 0; i < this.ListContext.length; i++) {
            let ctx = this.ListContext[i];
            if (ctx.estado == 1) {
                this.ListCtxVal.push(ctx);
            }
        }
        this.ListContext = this.ListContext.sort((a, b) => {
            if (a.name < b.name)
                return -1;
            else if (a.name > b.name)
                return 1;
            else
                return 0;
        });
    }
    addContext() {
        this.myData.toNew(new src_app_models_schema__WEBPACK_IMPORTED_MODULE_2__["TypeContext"](undefined, '', '', '', 1, undefined));
    }
    cancelContext() {
        this.myData.toCancel();
    }
    saveContext() {
        if (this.myData.mode == 'edit') {
            this.conexionService.editObject('typecontext', this.myData.xCurrent).subscribe(res => {
                this.myData.toSave(res);
            }, error => {
                var errorMessage = error;
                console.log('xerror:', errorMessage);
            });
        }
        else {
            this.conexionService.addObject('typecontext', this.myData.xCurrent).subscribe(res => {
                this.myData.toSave(res);
            }, error => {
                var errorMessage = error;
                console.log('xerror:', errorMessage);
            });
        }
    }
};
TypeContextComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] }
];
TypeContextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-context',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./type-context.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/central/views/type-context/type-context.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../central.component.css */ "./src/app/central/central.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./type-context.component.css */ "./src/app/central/views/type-context/type-context.component.css")).default]
    })
], TypeContextComponent);



/***/ }),

/***/ "./src/app/pipes/context.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/context.pipe.ts ***!
  \***************************************/
/*! exports provided: ContextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextPipe", function() { return ContextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContextPipe = class ContextPipe {
    transform(key, ctxList, fieldShow) {
        let res = '-';
        console.log('en pipe = ', key);
        if (key == null || ctxList.length < 1 || fieldShow == null) {
            res = '-';
        }
        else {
            let item = ctxList.find(s => s._id == key);
            if (item == null) {
                res = '-';
            }
            else {
                res = item[fieldShow];
            }
        }
        return res;
    }
};
ContextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'context'
    })
], ContextPipe);



/***/ }),

/***/ "./src/app/view-model/dataset.ts":
/*!***************************************!*\
  !*** ./src/app/view-model/dataset.ts ***!
  \***************************************/
/*! exports provided: DataSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSet", function() { return DataSet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DataSet {
    constructor() {
        this.Data = [];
        this.mode = 'brow';
    }
    toSelect(cur) {
        if (this.mode == 'brow' || this.mode == 'selec') {
            this.Current = cur;
            this.xCurrent = this.Current;
            this.mode = 'selec';
        }
    }
    initData(idx = 0, mod = 'brow') {
        this.mode = 'brow';
        if ((this.Data.length > 0) && (idx >= 0)) {
            this.Current = this.Data[idx];
            this.xCurrent = this.Current;
            this.mode = 'selec';
        }
        else {
            this.Current = undefined;
            this.xCurrent = undefined;
        }
    }
    toInit(tomode = 'brow') {
        if (this.Data.length > 0) {
        }
    }
    toEdit() {
        if (this.mode == 'selec') {
            this.xCurrent = this.cloneObject(this.Current);
            this.mode = 'edit';
        }
    }
    toNew(newCur) {
        console.log('this.mode', this.mode);
        if (this.mode == 'brow' || this.mode == 'selec') {
            this.xCurrent = newCur;
            this.mode = 'add';
        }
    }
    toCancel() {
        if (this.mode == 'edit') {
            this.xCurrent = this.Current;
            this.mode = 'selec';
        }
        else {
            if (this.mode == 'add') {
                this.initData();
            }
        }
    }
    toSave(resp) {
        if (this.mode == 'edit') {
            console.log('esto recibo en dataset edit edit:', resp);
            let inde = this.Data.findIndex(s => s['_id'] == resp['_id']);
            let ix = this.Data.splice(inde, 1, resp);
            this.Current = this.Data[inde];
            this.xCurrent = this.Current;
            this.mode = 'selec';
        }
        else {
            if (this.mode == 'add') {
                this.Data.push(resp);
                this.Current = this.Data[this.Data.length - 1];
                this.xCurrent = this.Current;
                this.mode = 'selec';
            }
        }
    }
    cloneObject(origi) {
        const jsonString = JSON.stringify(origi);
        const clonedObject = JSON.parse(jsonString);
        return clonedObject;
    }
    toNestSave(resp, DataNest) {
        if (this.mode == 'edit') {
            let inde = DataNest.findIndex(s => s['_id'] == resp['_id']);
            let ix = DataNest.splice(inde, 1, resp);
            this.Current = DataNest[inde];
            this.xCurrent = this.Current;
            this.mode = 'selec';
        }
        else {
            if (this.mode == 'add') {
                DataNest.push(resp);
                this.Current = DataNest[DataNest.length - 1];
                this.xCurrent = this.Current;
                this.mode = 'selec';
            }
        }
    }
    toFakeSave(resp, fielname = 'index') {
        if (this.mode == 'edit') {
            let inde = this.Data.findIndex(s => s[fielname] == resp[fielname]);
            let ix = this.Data.splice(inde, 1, resp);
            this.Current = this.Data[inde];
            this.xCurrent = this.Current;
            this.mode = 'selec';
        }
        else {
            if (this.mode == 'add') {
                this.Data.push(resp);
                this.Current = this.Data[this.Data.length - 1];
                this.xCurrent = this.Current;
                this.mode = 'selec';
            }
        }
    }
    toNewOrEditFake(modx = 'selec') {
        this.mode = modx;
    }
    toSetCurrent(ncur) {
        this.Data.push(ncur);
    }
}


/***/ })

}]);