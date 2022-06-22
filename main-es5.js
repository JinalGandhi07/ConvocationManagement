function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<body>\r\n    <br>\r\n    <br>\r\n    <h2 style=\"font-family: 'Times New Roman', Times, serif; color: white; background-color: rgba(0,0,0,.7); text-align: center; font-size: 20px; \">Please fill out the Information of students eligible for graduation</h2>\r\n<div class=\"login-box\">\r\n    <h2 style=\"font-family: 'Times New Roman', Times, serif;\">Student Information</h2>\r\n    <form ngNativeValidate (ngSubmit)=\"submitstudent(memberObject)\" #memberObject=\"ngForm\">\r\n     \r\n      <div class=\"user-box\">\r\n        <input type=\"text\" name=\"Name\" #Name=\"ngModel\" required minlength=\"3\" autocomplete=\"off\" ngModel>\r\n        <label>Student Name</label>\r\n      </div>\r\n\r\n      <div class=\"user-box\">\r\n        <input type=\"text\" name=\"EnrollmentNo\" #EnrollmentNo=\"ngModel\" required autocomplete=\"off\" ngModel>\r\n        <label>Student Enrollment No.</label>\r\n      </div>\r\n     \r\n      <div class=\"user-box\">      \r\n        <input autocomplete=\"off\" type=\"text\" list=\"branch\" name=\"Branch\" #Branch=\"ngModel\" required ngModel>\r\n<datalist id=\"branch\">\r\n  <option value=\"Computer Science Engineering\">\r\n  <option value=\"Civil Engineering\">\r\n  <option value=\"Electronics & Communication Engineering\">\r\n  <option value=\"Electrical Engineering\">\r\n  <option value=\"Mechanical Engineering\">\r\n  <option value=\"Agriculture Engineering\">\r\n    <option value=\"Mining Engineering\">\r\n</datalist>\r\n<label>Branch</label>      \r\n      </div>\r\n\r\n      <div class=\"user-box\">\r\n        <input  autocomplete=\"off\" type=\"text\" list=\"eligible\" name=\"eligibility\" #eligibility=\"ngModel\" required ngModel>\r\n        <datalist id=\"eligible\">\r\n          <option value=\"Eligible\">\r\n          <option value=\"Not Eligible\">\r\n        </datalist>\r\n        <label>Eligibility</label>\r\n      </div>\r\n\r\n      <div class=\"user-box\">\r\n        <input type=\"number\" name=\"YearOfGrad\" #YearOfGrad=\"ngModel\" required autocomplete=\"off\" ngModel>\r\n        <label>Year of Graduation</label>\r\n      </div>\r\n\r\n      <button type=\"submit\">\r\n          \r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        Submit\r\n    \r\n      </button>\r\n    </form>\r\n    <br> <br>\r\n    <div class=\"outsidebuttons\">\r\n      <button >\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n       <div (click)=\"clearit()\">Clear Previous Data</div> \r\n      </button>\r\n<!-- </div>\r\n<div class=\"outsidebuttons\"> -->\r\n  \r\n      <button >\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n       <div (click)=\"logout()\">Admin-Logout</div> \r\n      </button>\r\n    \r\n      <button >\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n       <div (click)=\"branches()\">Previous Year Students</div> \r\n      </button>\r\n\r\n    </div> \r\n  </div>\r\n</body>\r\n<!-- <button (click)=\"logout()\"> logout</button> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/awards/awards.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/awards/awards.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAwardsAwardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\r\n    body {\r\n      background-image: url('assets/images/ctaeone.png');\r\n      background-repeat: no-repeat;\r\n      background-size: 100%;\r\n    }\r\n    </style>\r\n     \r\n        <body>\r\n        <br>\r\n<!--<a href=\"assets/pdf/shikha.pdf\" download=\"GFG\">\r\n<button style=\"margin-right: 16px\" type=\"button\" class=\"btn\">Gold Medalist</button>\r\n</a>\r\n\r\n<button [routerLink]=\"['/graduates']\" type=\"button\" class=\"btn\">Students eligible for graduation</button>\r\n-->\r\n\r\n<div class=\"card\">\r\n  <header>\r\n    <time\r\n  datetime=\"2018-05-15T19:00\"></time>\r\n    <div class=\"logo\">\r\n      <span>\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" viewBox=\"0 0 234.5 53.7\"><style>.st0{fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;}</style><path d=\"M.6 1.4L116.9 52l117-50.6\" class=\"st0\"/></svg>\r\n     </span></div>\r\n    <div class=\"sponsor\"></div>\r\n  </header>\r\n  <div class=\"announcement\">\r\n    <a href=\"assets/pdf/GoldMedalList.pdf\" download=\"GoldMedalList\">\r\n    <h1 onclick=\"\">Gold  Medalist</h1>\r\n</a>\r\n    <h3 class=\"italic\"></h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n    <header>\r\n      <time\r\n    datetime=\"2018-05-15T19:00\"></time>\r\n      <div class=\"logo\">\r\n        <span>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" viewBox=\"0 0 234.5 53.7\"><style>.st0{fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;}</style><path d=\"M.6 1.4L116.9 52l117-50.6\" class=\"st0\"/></svg>\r\n       </span></div>\r\n      <div class=\"sponsor\"></div>\r\n    </header>\r\n    <div class=\"announcement\">\r\n      <a>\r\n      <h1 [routerLink]=\"['/graduates']\">Graduated Students</h1>\r\n    </a>\r\n      <h3 class=\"italic\"></h3>\r\n    </div>\r\n  </div>\r\n  \r\n</body> \r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/branches/branches.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/branches/branches.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBranchesBranchesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"bgded overlay\" style=\"background-image:url('assets/images/background.jpg');\"> \n<section >\n    <br>\n    <br>\n    <h2 style=\"font-family: 'Times New Roman', Times, serif; color: white; background-color: rgba(0,0,0,.7); text-align: center; font-size: 20px; \" class=\"col-lg-12\">Select Branch of your choice!</h2>\n  \n    <div class=\"container\">        \n   <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-8\">\n                <a  class=\"services-small-item \">\n                    <ng-template let-a=\"aVariableomg\" [ngTemplateOutletContext]=\"{aVariableomg: 'Mining Engineering'}\" [ngTemplateOutlet]=\"selfiechw\" #selfiechw>\n                    <div class=\"icon\">\n                        <i class=\"fas fa-gavel\"></i>\n                    </div>\n                    <h5  class=\"services-title\">{{a}}</h5>\n                    <br>\n             \n                    <div (click)=\"students(a)\" class=\"button\">\n                        <i class=\"fa fa-chevron-right\"></i>\n                    </div>\n                </ng-template>\n                </a>\n                <div class=\"item-bg\"></div>\n            </div>\n            <div class=\"col-lg-3 col-sm-8\">\n                <a  class=\"services-small-item \">\n                    <ng-template let-b=\"aVariableom\" [ngTemplateOutletContext]=\"{aVariableom: 'Civil Engineering'}\" [ngTemplateOutlet]=\"selfiech\" #selfiech>\n                   \n                    <div class=\"icon\">\n                        <i class=\"fas fa-building\"></i>\n                    </div>\n                    <h5 class=\"services-title\">{{b}}</h5>\n                    <br>\n                    <div  (click)=\"students(b)\" class=\"button\">\n                        <i class=\"fa fa-chevron-right\"></i>\n                    </div>\n                    </ng-template>\n                </a>\n                <div class=\"item-bg\"></div>\n            </div>\n            <div class=\"col-lg-3 col-sm-8\">\n                <a  class=\"services-small-item\">\n                    <ng-template let-c=\"aVariableo\" [ngTemplateOutletContext]=\"{aVariableo: 'Mechanical Engineering'}\" [ngTemplateOutlet]=\"selfiec\" #selfiec>\n                   \n                    <div class=\"icon\">\n                        <i class=\"fas fa-cogs\"></i>\n                    </div>\n                    <h5 class=\"services-title\">{{c}}</h5>\n                  <br>\n                    <div (click)=\"students(c)\" class=\"button\">\n                        <i class=\"fa fa-chevron-right\"></i>\n                    </div>\n                    </ng-template>\n                </a>\n                <div class=\"item-bg\"></div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <a  class=\"services-small-item\">\n                    <ng-template let-d=\"aVariable\" [ngTemplateOutletContext]=\"{aVariable: 'Electrical Engineering'}\" [ngTemplateOutlet]=\"selfie\" #selfie>\n                    <div class=\"icon\">\n                        <i class=\"far fa-lightbulb\"></i>\n                    </div>\n                    <h5 class=\"services-title\">{{d}}</h5>\n                    <br>\n                    <div (click)=\"students(d)\" class=\"button\">\n                        <i class=\"fa fa-chevron-right\"></i>\n                    </div>\n                    </ng-template>\n                </a>\n                <div class=\"item-bg\"></div>\n            </div>\n        </div>\n        <div class=\"row\">\n      \n            <div class=\"col-lg-4 col-sm-6\">\n                <a  class=\"services-small-item \">\n                    <ng-template let-e=\"aVariabl\" [ngTemplateOutletContext]=\"{aVariabl: 'Electronics Engineering'}\" [ngTemplateOutlet]=\"selfi\" #selfi>\n                    <div class=\"icon\">\n                        <i class=\"fas fa-rss\"></i>\n                    </div>\n                    <h5 class=\"services-title\">{{e}}</h5>\n                  \n                    <div (click)=\"students(e)\" class=\"button\">\n                        <i class=\"fa fa-chevron-right\"></i>\n                    </div>\n                    </ng-template>\n                </a>\n                <div class=\"item-bg\"></div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\">\n                <a class=\"services-small-item\">\n                    <ng-template let-f=\"aVariab\" [ngTemplateOutletContext]=\"{aVariab: 'Agriculture Engineering'}\" [ngTemplateOutlet]=\"seli\" #seli>\n                    <div class=\"icon\">\n                        <i class=\"fas fa-seedling\"></i>\n                    </div>\n                    <h5 class=\"services-title\">{{f}}</h5>\n                   \n                    <div (click)=\"students(f)\" class=\"button\">\n                        <i class=\"fa fa-chevron-right\"></i>\n                    </div>\n                    </ng-template>\n                </a>\n                <div class=\"item-bg\"></div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6\">\n                <a  class=\"services-small-item\">\n                    <ng-template let-g=\"aVariabu\" [ngTemplateOutletContext]=\"{aVariabu: 'Computer Science Engineering'}\" [ngTemplateOutlet]=\"selij\" #selij>\n                    <div class=\"icon\">\n                         <i class=\"fas fa-desktop\"></i> \n                    </div>\n                    <h5 class=\"services-title\">{{g}}</h5>\n                  \n                    <div (click)=\"students(g)\" class=\"button\">\n                        <i class=\"fa fa-chevron-right\"></i>\n                    </div>\n                    </ng-template>\n                </a>\n                <div class=\"item-bg\"></div>\n            </div>\n            </div>\n    </div>\n</section>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactusContactusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    <head>\r\n        <!-- <meta charset=\"utf-8\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> -->\r\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n    </head>\r\n    <body>\r\n        <div class=\"page\">\r\n            \r\n              <div class=\"invite\">\r\n               \r\n                    <img class=\"cg\" src=\"assets/images/deanc.jpg\" style=\"width:100px\"> \r\n                    <div class=\"text\" style=\"color: black;font-family:'Times New Roman', Times, serif;font-size: 15px;\">\r\n                     <b>  Dr. Ajay Kumar Sharma</b> <br>\r\n\r\n                       Professor & Dean<br>\r\n\r\n                       College of Technology and Engineering<br>\r\n                       Udaipur-313001<br><br>\r\n                       Phone: +91 294 2470837 (O)<br>\r\n                       \r\n                       Email:  deanctae@mpuat.ac.in ,  ctaedean@gmail.com  <br>\r\n                              \r\n                    </div>\r\n                </div><br>\r\n               <section>\r\n                   \r\n    <div class=\"container\">\r\n      <div class=\"contactinfo\">\r\n        <div>\r\n          <h2>Contact Info</h2>\r\n          <ul class=\"info\">\r\n            <li>\r\n              <span><i class=\"fa fa-map-marker\" style=\"font-size:36px\"></i></span>\r\n                <span>University Road,Udaipur</span>\r\n            </li>\r\n            <li>\r\n              <span><i class=\"fa fa-phone\" style=\"font-size:36px\"></i> </span>\r\n                <span>011-76749683</span>\r\n            </li>\r\n            <li>\r\n              <span><i class=\"fa fa-envelope\" style=\"font-size:36px\"></i></span>\r\n                <span><a href=\"mailto:ctaesupport@gmail.com?subject=Regarding Convocation Information\" target=\"_blank\">ctaesupport@gmail.com</a></span>\r\n            </li>\r\n           \r\n          </ul>\r\n         \r\n        </div></div>\r\n        <div class=\"contactForm\">\r\n         \r\n            <h2><b>GET IN TOUCH</b></h2>\r\n               <p style=\"color: black;\"> We would love to hear from you!!!</p><br>\r\n               <form ngNativeValidate (ngSubmit)=\"addContact(memberObject)\" #memberObject=\"ngForm\" >\r\n            <div class=\"formBox\">\r\n             \r\n              <div class=\"inputBox w50\">\r\n                <!-- <span>First Name</span> -->\r\n                <input type=\"text\" #FirstName=\"ngModel\" ngModel name=\"FirstName\" required placeholder=\"First Name\">\r\n               \r\n           </div>\r\n           <div class=\"inputBox w50\">\r\n            <!-- <span>Last Name</span> -->\r\n            <input type=\"text\" #LastName=\"ngModel\" ngModel name=\"LastName\" required placeholder=\"Last Name\">\r\n           \r\n       </div>\r\n       <div class=\"inputBox w50\">\r\n        <!-- <span>Email Address</span> -->\r\n        <input type=\"text\" #Email=\"ngModel\" ngModel name=\"Email\" required placeholder=\"Email Address\">\r\n       \r\n   </div>\r\n   <div class=\"inputBox w50\">\r\n    <!-- <span>Mobile Number</span> -->\r\n    <input type=\"text\"  #Contact=\"ngModel\" ngModel name=\"Contact\" required placeholder=\"Mobile Number\">\r\n    \r\n</div>\r\n   <div class=\"inputBox w100\">\r\n    <!-- <span>Message</span> -->\r\n    <input type=\"textarea\"  #Message=\"ngModel\" ngModel name=\"Message\"  required placeholder=\"Message\">\r\n    \r\n</div>\r\n\r\n  <div class=\"inputBox w100\">\r\n    <input type=\"submit\" value=\"SUBMIT\">\r\n  </div>\r\n\r\n\r\n           </div>\r\n          </form>\r\n       </div>\r\n      \r\n    </div>\r\n  \r\n  </section>\r\n        <br><br>     \r\n        </div>\r\n     \r\n    </body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDisplayDisplayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n<div class=\"container\" id=\"seatpdf\">\r\n    <!-- <div class=\"row justify-content-center\"> -->\r\n      <div class=\"col-md-15 ticket \" >\r\n          <h1> Convocation Seats Booked</h1>\r\n          <table class=\"table ps_details \">\r\n            <tr>\r\n              <th>Venue</th>\r\n              <th>Date</th>\r\n              <th>Reporting Time </th>               \r\n            </tr>\r\n            <tr>\r\n                <td>CTAE Conference Hall</td>\r\n                <td>24th December 2021,Friday</td>\r\n                <td>10:00AM</td>\r\n             </tr>\r\n          </table>\r\n          <table class=\"table ps_details\">\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Branch</th>\r\n              <th>Email</th>\r\n              <th>Phone Number</th>\r\n              <th>Seats</th>\r\n              <th>Seat No.</th>   \r\n            </tr>\r\n            <tr>\r\n              <td>{{Name}}</td>\r\n              <td>{{Branch}}</td>\r\n              <td>{{Email}}</td>\r\n              <td>{{Phone}}</td>\r\n              <td>{{Rgno}}</td>\r\n              <td>{{Bookedseats}}</td>\r\n            </tr>\r\n          </table>  \r\n      </div>     \r\n    <!-- </div>   -->   \r\n  </div>\r\n  <button style=\"width: 200px; font-family: 'Times New Roman', Times, serif; margin-top: 0px; float: left; margin-left: 474px;\" (click)=\"download()\">Download PDF</button>\r\n  <button style=\"width: 200px; font-family: 'Times New Roman', Times, serif; float: left; margin-left: 20px;\" (click)=\"registernew()\">Register Another Student</button><br>\r\n\r\n  <br>\r\n  <br>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bgded overlay row4\" style=\"background-image:url('assets/images/abstract.jpg');\">\r\n    <footer id=\"footer\" class=\"hoc clear\"> \r\n      <div class=\"center btmspace-20\">\r\n        <h6 class=\"heading\">MPUAT</h6>\r\n        <ul class=\"faico clear\">\r\n          <li><a class=\"faicon-facebook\" href=\"#\"><i class=\"fab fa-facebook\"></i></a></li>\r\n          <li><a class=\"faicon-instagram\" href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\r\n          <li><a class=\"faicon-linkedin\" href=\"#\"><i class=\"fab fa-linkedin\"></i></a></li>\r\n          <li><a class=\"faicon-twitter\" href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\r\n        </ul>\r\n      </div>\r\n      <hr class=\"btmspace-20\">\r\n      <div class=\"wrapper row5\">\r\n        <div id=\"copyright\" class=\"hoc clear\"> \r\n          <!-- <p class=\"fl_left\">Copyright &copy; 2021 - All Rights Reserved - <a href=\"#\">CTAE</a></p> -->\r\n          <p  style=\"text-align: center;align-items: center;\"> © Copyright 2021 College of Technology and Engineering. All rights reserved.</p>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/graduates/graduates.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graduates/graduates.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGraduatesGraduatesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>      \r\n<div class=\"center\">\r\n    <form (ngSubmit)=\"searchStudent(details)\" #details=\"ngForm\">\r\n        <div class=\"row mx-auto\">\r\n        \r\n            <div  class=\"form-row\">\r\n                <div class=\"form-group text-center text-secondary\">\r\n                <label  style=\"color: black; margin-left: 170px; font-family: 'Times New Roman', Times, serif; font-size: 20px;\">Branch</label>\r\n                \r\n                <select name=\"branch\"  #branch=\"ngModel\" ngModel>\r\n                    <option selected>Choose...</option>\r\n                    <option >Computer Science Engineering</option>\r\n                    <option>Civil Engineering</option>\r\n                    <option>Mechanical Engineering</option>\r\n                    <option>Electrical Engineering</option>\r\n                    <option>Agriculture Engineering</option>\r\n                    <option>Mining Engineering</option>\r\n                    <option>Electronics and Communication Engineering</option>\r\n                </select>\r\n            \r\n                </div>\r\n            \r\n            <br>\r\n        \r\n            <button type=\"submit\" class=\"buttonk\">Search</button>\r\n        \r\n        <br>\r\n        <br>\r\n\r\n         </div>\r\n         <div class=\"col-lg-3\"></div>\r\n       </div>\r\n    \r\n    </form>\r\n</div>\r\n\r\n<div *ngIf=\"isclicked\">\r\n    \r\n       <!--<table>\r\n            <tr>\r\n                \r\n                <th class=\"thead-dark\" colspan=\"4\">Name</th>\r\n                <th class=\"thead-dark\" colspan=\"4\">Branch</th>\r\n                \r\n           </tr>\r\n           <tr *ngFor=\"let item of memberService.result1\">\r\n            <td colspan=\"4\"  class=\"stage-earth\">{{item.Name}}<span></span></td>\r\n            <td colspan=\"4\"  class=\"stage-earth\">{{item.Branch}}<span></span></td>\r\n            </tr>\r\n        </table>-->\r\n\r\n\r\n        <table class=\"center\">\r\n            \r\n            <tr>\r\n            <th>Name</th>\r\n            <th>Branch</th>\r\n            <th>Enrollment No.</th>\r\n            </tr>\r\n        \r\n        \r\n            <tr *ngFor=\"let item of memberService.result1\">\r\n            <td class=\"stage-saturn\">{{item.Name}}</td>\r\n            <td class=\"stage-earth\">{{item.Branch}}</td>\r\n            <td class=\"stage-earth\">{{item.EnrollmentNo}}</td>\r\n            </tr>\r\n        \r\n          </table>\r\n          \r\n    \r\n\r\n\r\n\r\n    \r\n    </div>\r\n    \r\n\r\n</body>\r\n<!--<app-footer></app-footer>-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <html>\r\n    <head>\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    </head> -->\r\n    <body>\r\n        <div class=\"page\">\r\n           \r\n            <!-- <div class=\"navbar\">\r\n                <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n               \r\n                <div class=\"dropdown\">\r\n                  <button class=\"dropbtn\">Convocation\r\n                    <i class=\"fa fa-caret-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-content\">\r\n                    <a routerLink=\"/guide\" routerLinkActive=\"active\">Convocation invitation</a>\r\n                    <a routerLink=\"/symptoms\" routerLinkActive=\"active\">Convocation schedule</a>\r\n                  \r\n                    \r\n                  </div>\r\n                </div>\r\n                <a href=\"#about\">About</a>\r\n                <a routerLink=\"/cure\" routerLinkActive=\"active\">Register</a>\r\n                <a routerLink=\"/cure\" routerLinkActive=\"active\">Awards</a>\r\n                <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a>\r\n                <a routerLink=\"/login\" routerLinkActive=\"active\" >Log Out</a>\r\n              </div> -->\r\n              <br><br>\r\n              <div class=\"bodypart\">\r\n                  <div class=\"imgpart\" >\r\n                    <img class=\"mySlides\" src=\"assets/images/slideimg.gif\" style=\"width:100%\"> \r\n                    \r\n                  </div>\r\n                  <div class=\"events\">\r\n                      <div class=\"news\">\r\n                        <img class=\"cg\" src=\"assets/images/convologo.jpeg\" style=\"width:100%\"> \r\n                         <div class=\"newsinfo\">\r\n                             <h1>SAVE THE DATE</h1>\r\n\r\n                             <h3>24th DECEMBER 2021</h3>\r\n                             <h3>Friday</h3>\r\n                         </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"invite\">\r\n                      <br>\r\n                    <h2 style=\"text-align: center;\">CONVOCATION INVITATION</h2>\r\n                    <div class=\"text\">\r\n                      Dear Alumnus,<br><br>\r\n\r\n                      A Convocation Ceremony is a momentous milestone for students, as also the University and its constituent Institutes. It is a day when we celebrate the culmination of your academic endeavours, diligence, commitment and enthusiasm. It is indeed a moment of pride for all of us to acknowledge the praiseworthy role of our students, alumni and their families. <br>\r\n                      \r\n                   \r\n                      The team CTAE considers it a privilege to invite you to the 20 e-Convocation Ceremony on 24\" December 2020 (Friday) at 10 AM. <br>\r\n                      \r\n                      \r\n                      With best wishes for a bright and successful future,<br><br>\r\n                      \r\n                      Dr. Ajay Kumar Sharma,<br> Dean CTAE\r\n                  </div>   </div>\r\n                  <div class=\"guest\">\r\n                      <h1 style=\"text-align: center; color: black; font-weight: 900;\"> GUEST OF HONOR</h1><br>\r\n                  <div class=\"cards\">\r\n                    <div class=\"image\">\r\n                        <img src=\"assets/images/ad.jpg\">\r\n            \r\n                    </div>\r\n            \r\n                    <div class=\"title\">\r\n                        <h3>\r\n                            Hon'able guest\r\n                        </h3>\r\n                        <h5>ASHOK DALWAI</h5>\r\n                        <h6>NRAA's CEO </h6>\r\n                    </div>\r\n                    <!-- <div class=\"description\">\r\n                     \r\n                         <button (click)=\"medicine()\">Check Availability</button> \r\n           \r\n            \r\n                    </div>\r\n                     -->\r\n            \r\n            \r\n                </div>\r\n                <div class=\"cards\">\r\n                    <div class=\"image\">\r\n                        <img src=\"assets/images/gofr.jpg\">\r\n            \r\n                    </div>\r\n            \r\n                    <div class=\"title\">\r\n                        <h3>\r\n                            CHIEF GUEST\r\n                        </h3>\r\n                        <h5>SHRI KALRAJ MISHRA</h5>\r\n                        <h6>Governor of Rajasthan</h6>\r\n                    </div>\r\n                    <!-- <div class=\"description\">\r\n                     \r\n                         <button (click)=\"medicine()\">Check Availability</button> \r\n           \r\n            \r\n                    </div>\r\n                     -->\r\n            \r\n            \r\n                </div>\r\n                <div class=\"cards\">\r\n                    <div class=\"image\">\r\n                        <img src=\"assets/images/cgc.png\">\r\n            \r\n                    </div>\r\n            \r\n                    <div class=\"title\">\r\n                        <h3>\r\n                            Hon'able guest\r\n                        </h3>\r\n                        <h5>SHRI LALCHAND KATARIYA</h5>\r\n                        <h6>Agriculture Minister(Raj.)</h6>\r\n                        \r\n                    </div>\r\n                    <!-- <div class=\"description\">\r\n                     \r\n                         <button (click)=\"medicine()\">Check Availability</button> \r\n           \r\n            \r\n                    </div>\r\n                     -->\r\n            \r\n            \r\n                </div>\r\n              </div>\r\n                 <!-- <div class=\"footer\" style=\"height: 10px;\">\r\n                  <p class=\"cp-text\">\r\n                    © Copyright 2021 College of Technology and Engineering. All rights reserved.\r\n                </p>\r\n                 </div> -->\r\n              </div>\r\n        </div>\r\n     \r\n    </body>\r\n<!-- </html> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <html lang=\"\">\r\n<head>\r\n<title>Convocation Management</title>\r\n<meta charset=\"utf-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\r\n</head> \r\n<body id=\"top\">\r\n<div class=\"bgded overlay\" style=\"background-image:url('assets/images/abstract.jpg');\"> \r\n  <div class=\"wrapper row0\">\r\n    <div id=\"topbar\" class=\"hoc clear\">\r\n      <div class=\"fl_left\"> \r\n        <ul class=\"nospace\">\r\n          <li><i class=\"fas fa-phone rgtspace-5\"></i>+91 294 2470837 (O)</li>\r\n          <li><i class=\"far fa-envelope rgtspace-5\"></i>deanctae@mpuat.ac.in</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"wrapper row1\">\r\n    <header id=\"header\" class=\"hoc clear\">\r\n      <div id=\"logo\" class=\"fl_left\"> \r\n        <h1><a routerLink=\"/home\">CTAE</a></h1>\r\n      </div>\r\n      <nav id=\"mainav\" class=\"fl_right\"> \r\n        <ul class=\"clear\">\r\n          <li><a routerLink=\"/home\">Home</a></li>\r\n          <li><a routerLink=\"/schedule\" >Schedule</a></li>\r\n          <li><a routerLink=\"/register\">Register</a></li>\r\n          <li><a routerLink=\"/awards\">Awards</a></li>\r\n          <li><a  routerLink=\"/contact\">Contact Us</a></li>\r\n          <li><div class=\"login\"><a (click) = \"show()\">Admin-Login</a></div></li>\r\n          <li><a href=\"#\">Link Text</a></li> -->\r\n        <!-- </ul>\r\n      </nav>\r\n    </header>\r\n  </div>\r\n</div> -->\r\n<body id=\"top\">\r\n  <!-- <div class=\"page\"> -->\r\n    <div class=\"headerpart\">\r\n           \r\n    </div>\r\n      <div class=\"navbar\">\r\n                <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n               \r\n                <!-- <div class=\"dropdown\">\r\n                  <button class=\"dropbtn\">Convocation\r\n                    <i class=\"fa fa-caret-down\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-content\">\r\n                    <a routerLink=\"/guide\" routerLinkActive=\"active\">Convocation invitation</a>\r\n                   \r\n                  \r\n                    \r\n                  </div>\r\n                </div> -->\r\n                <!-- <a href=\"#about\">About</a> -->\r\n                <a routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\r\n                <a routerLink=\"/awards\" routerLinkActive=\"active\">Awards</a>\r\n                <a routerLink=\"/schedule\" routerLinkActive=\"active\">Schedule</a>\r\n                <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a>\r\n                <a  class=\"admin\" (click) = \"show()\">Admin Login</a>\r\n              </div>\r\n<div [style.display]=\"showModal ? 'block' : 'none'\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" style=\"height: 500px; margin-top: 100px;\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header \" style=\"background-color: #000000; background-image: linear-gradient(315deg, #000000 0%, #7f8c8d 74%);\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\" style=\"color:white;  font-family: 'Times New Roman', Times, serif; size: 35px;\">Login</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"loginform\">\r\n          <label style=\"font-family: 'Times New Roman', Times, serif; color: black; font-size: large;\">Email</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" type=\"text\" required ><br>\r\n        \r\n          <label  style=\"font-family: 'Times New Roman', Times, serif; color: black; font-size: large;\">Password</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" required  ><br>\r\n           \r\n          <button  class=\"btn\"  (click) = \"onSubmit()\">Sign-in</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click) = \"hide()\">Close</button>\r\n      \r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/previousstudents/previousstudents.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/previousstudents/previousstudents.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreviousstudentsPreviousstudentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>      \n    <div class=\"center\">\n        <form (ngSubmit)=\"searchStudent(details)\" #details=\"ngForm\">\n            <div class=\"row mx-auto\">\n            \n                <div  class=\"form-row\">\n                    <div class=\"form-group text-center text-secondary\">\n                    <label  style=\"color: black; margin-left: 390px; font-family: 'Times New Roman', Times, serif; font-size: 20px;\">Year Of Graduation</label>\n                    \n                    <input required #year=\"ngModel\" ngModel type=\"number\" id=\"year\" name=\"year\">\n                \n                    </div>\n                \n                <br>\n            \n                <button type=\"submit\" class=\"buttonk\">Search</button>\n            \n            <br>\n            <br>\n    \n             </div>\n             <div class=\"col-lg-3\"></div>\n           </div>\n        \n        </form>\n    </div>\n    \n    <div *ngIf=\"isclicked\">\n        \n    \n    \n            <table class=\"center\">\n                \n                <tr>\n                <th>Name</th>\n                <th>Branch</th>\n                <th>Enrollment No.</th>\n                <th>Eligibility</th>\n                </tr>\n            \n            \n                <tr *ngFor=\"let item of memberService.resu\">\n                <td class=\"stage-saturn\">{{item.Name}}</td>\n                <td class=\"stage-earth\">{{item.Branch}}</td>\n                <td class=\"stage-earth\">{{item.EnrollmentNo}}</td>\n                <td class=\"stage-saturn\">{{item.eligibility}}</td>\n                </tr>\n            \n              </table>\n              \n        \n    \n    \n    \n        \n        </div>\n        \n    \n    </body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body >\r\n    <div class=\"bgded overlay\" style=\"background-image:url('assets/images/background.jpg');\"> \r\n      <br>\r\n      <div class=\"main-block\" style=\"margin-left: 445px;\" *ngIf=\"!this.memberService.available\"> \r\n        <div id=\"breadcrumb\" class=\"title_register\"> \r\n          <i class=\"fas fa-search\" style=\"font-size: 53px;\">Check Eligibility</i> \r\n        </div>\r\n          <main class=\"info\">           \r\n              <form (ngSubmit)=\"submitSearch(searchObject)\" #searchObject=\"ngForm\">\r\n                <label class=\"required\">Enrollment No.</label>\r\n                <input  class=\"form-control\" name=\"enrollS\" #enrollS=\"ngModel\" type=\"string\" required ngModel><br>\r\n                <label class=\"required\">Name</label>\r\n                <input  class=\"form-control\" name=\"nameS\" #nameS=\"ngModel\" type=\"string\" required ngModel><br>\r\n                <label class=\"required\">Branch</label>\r\n                <select class=\"form-control\" name=\"branchS\" #branchS=\"ngModel\" ngModel>\r\n                  <option value=\"Computer Science Engineering\">Computer Science Engineering</option>\r\n                  <option value=\"Electronics & Communication Engineering\">Electronics & Communication Engineering</option>\r\n                  <option value=\"Electrical Engineering\">Electrical Engineering</option>\r\n                  <option value=\"Agriculture Engineering\">Agricultural Engineering</option>\r\n                  <option value=\"Mechanical Engineering\">Mechanical Engineering</option>\r\n                  <option value=\"Mining Engineering\">Mining Engineering</option>\r\n                  <option value=\"Civil Engineering\">Civil Engineering</option>\r\n                </select>\r\n                <button [disabled]=\"!searchObject.valid\" class=\"btn btn-dark btn-block\" type=\"submit\">Submit</button>\r\n              </form>\r\n            <!-- / main body -->\r\n            <div class=\"clear\"></div>\r\n          </main>\r\n          <br>\r\n      </div>\r\n      <div class=\"main-block\" style=\"width: 900px; margin-left: 230px; padding: 10px;\" *ngIf=\"this.memberService.available\"> \r\n      <div id=\"breadcrumb\" class=\"title_register\"> \r\n        <i class=\"fas fa-pencil-alt\" style=\"font-size: 113px;\">Register</i> \r\n      </div >\r\n        <main class=\"info\">           \r\n            <form (ngSubmit)=\"submitCall(memberObject)\" #memberObject=\"ngForm\">\r\n              <input style=\"width: 700px; color:black;\" class=\"form-control\" name=\"enroll\" type=\"string\" value={{this.search.enrollS}} readonly=\"readonly\"><br>\r\n              <input style=\"width: 700px; color:black;\" class=\"form-control\" name=\"name\" type=\"string\" value={{this.search.nameS}} readonly=\"readonly\"><br>\r\n              <input class=\"form-control\" name=\"mname\" #mname=\"ngModel\" type=\"string\" required placeholder=\"Mother's name*\" ngModel><br>\r\n              <input class=\"form-control\" name=\"fname\" #fname=\"ngModel\" type=\"string\" required placeholder=\"Father's name*\" ngModel><br>\r\n              <input style=\"width: 700px; color:black;\" class=\"form-control\" name=\"branch\" type=\"string\" value={{this.search.branchS}} readonly=\"readonly\"><br>\r\n              <!-- <label class=\"required\">Branch</label>\r\n              <select class=\"form-control\" name=\"branch\" #branch=\"ngModel\" ngModel>\r\n                <option value=\"ComputerScienceEngineering\">Computer Science Engineering</option>\r\n                <option value=\"ElectronicsCommunication Engineering\">Electronics & Communication Engineering</option>\r\n                <option value=\"ElectricalEngineering\">Electrical Engineering</option>\r\n                <option value=\"AgriculturalEngineering\">Agricultural Engineering</option>\r\n                <option value=\"MechanicalEngineering\">Mechanical Engineering</option>\r\n                <option value=\"MiningEngineering\">Mining Engineering</option>\r\n                <option value=\"CivilEngineering\">Civil Engineering</option>\r\n              </select> -->\r\n              <!-- <label class=\"required\">Email ID</label> -->\r\n              <input class=\"form-control\" name=\"email\" #email=\"ngModel\" type=\"email\" required placeholder=\"Email id*\" ngModel><br>\r\n              <!-- <label class=\"required\">Phone number</label> -->\r\n              <input class=\"form-control\" name=\"phone\" #phone=\"ngModel\" type=\"number\" required placeholder=\"Phone number*\" ngModel><br>\r\n              <!-- <label class=\"required\">Address</label> -->\r\n              <input class=\"form-control\" name=\"address\" #address=\"ngModel\" type=\"string\" required placeholder=\"Address*\" ngModel><br>\r\n              <label class=\"required\">No. of Guests</label>\r\n              <input class=\"form-control\" name=\"guestno\" #guestno=\"ngModel\" type=\"number\" required min=0 max=2 ngModel><br>\r\n              <!-- <label class=\"required\">Names of Guests</label> -->\r\n              <input class=\"form-control\" name=\"guestnames\" #guestnames=\"ngModel\" type=\"string\" required placeholder=\"Names of guests*\" ngModel><br>\r\n              <button [disabled]=\"!memberObject.valid\" class=\"btn btn-dark btn-block\"  type=\"submit\">Submit</button>\r\n            </form>\r\n          <!-- / main body -->\r\n          <div class=\"clear\"></div>\r\n        </main>\r\n    </div>\r\n    <br>\r\n    </div>\r\n   \r\n    <!-- JAVASCRIPTS -->\r\n    <script src=\"../layout/scripts/jquery.min.js\"></script>\r\n    <script src=\"../layout/scripts/jquery.backtotop.js\"></script>\r\n    <script src=\"../layout/scripts/jquery.mobilemenu.js\"></script>\r\n    </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScheduleScheduleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<head>\r\n   <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css\">\r\n</head>\r\n\r\n<body>\r\n  \r\n    <h1><i class=\"bi bi-clock-fill\"></i>   Schedule for the Convocation Day</h1>\r\n    <br>\r\n    <table>\r\n      <tr>\r\n        <th >Time</th>\r\n        <td colspan=\"4\"  class=\"stage-saturn\" >Event<span></span></td>\r\n      </tr>\r\n    <tr>\r\n      <th >{{expense.result[0].Time}}</th>\r\n      <td colspan=\"4\"  class=\"stage-earth\">{{expense.result[0].Event}}<span>{{expense.result[0].Speaker}}</span></td>\r\n    </tr>\r\n    <tr>\r\n      <th>{{expense.result[1].Time}}</th>\r\n      <td colspan=\"4\" class=\"stage-mercury\">{{expense.result[1].Event}}<span>{{expense.result[1].Speaker}}</span></td>\r\n    </tr>\r\n    <tr>\r\n      <th>{{expense.result[2].Time}}</th>\r\n      <td colspan=\"4\" class=\"stage-earth\">{{expense.result[2].Event}}<span>{{expense.result[2].Speaker}}</span></td>\r\n    </tr>\r\n    <tr>\r\n      <th>{{expense.result[3].Time}}</th>\r\n      <td colspan=\"4\" class=\"stage-earth\">{{expense.result[3].Event}}<span>{{expense.result[3].Speaker}}</span></td>\r\n    </tr>\r\n    <tr>\r\n      <th>{{expense.result[4].Time}}</th>\r\n      <td colspan=\"4\" class=\"stage-mercury\">{{expense.result[4].Event}}<span>{{expense.result[4].Speaker}}</span></td>\r\n    </tr>\r\n    <tr>\r\n      <th>{{expense.result[5].Time}}</th>\r\n      <td colspan=\"4\" class=\"stage-mercury\">{{expense.result[5].Event}}<span>{{expense.result[5].Speaker}}</span></td>\r\n    </tr>\r\n    <tr>\r\n      <th>{{expense.result[6].Time}}</th>\r\n      <td colspan=\"4\" class=\"stage-saturn\">{{expense.result[6].Event}}<span>{{expense.result[6].Speaker}}</span></td>\r\n    </tr>\r\n    <tr>\r\n      <th>{{expense.result[7].Time}}</th>\r\n      <td colspan=\"4\" class=\"stage-saturn\">{{expense.result[7].Event}}<span>{{expense.result[7].Speaker}}</span></td>\r\n    </tr>\r\n    <tr>\r\n      <th>{{expense.result[8].Time}}</th>\r\n      <td colspan=\"4\" class=\"stage-earth\">{{expense.result[8].Event}}<span>{{expense.result[8].Speaker}}</span></td>\r\n    </tr>\r\n    <tr>\r\n      <th>{{expense.result[9].Time}}</th>\r\n      <td rowspan=\"1\" colspan=\"1\" class=\"stage-mercury\">{{expense.result[9].Event}}<span>{{expense.result[9].Speaker}}</span></td>\r\n      <td rowspan=\"1\"  colspan=\"2\" class=\"stage-saturn\">{{expense.result[9].Event2}}<span>{{expense.result[9].Speaker}}</span></td>\r\n      <td  rowspan=\"1\" colspan=\"1\" class=\"stage-mercury\">{{expense.result[9].Event3}}<span>{{expense.result[9].Speaker}}</span></td>\r\n      <!-- <td rowspan=\"2\" class=\"stage-saturn\">Lunch</td> -->\r\n    <!-- </tr>\r\n     <tr>\r\n      <th></th>\r\n    </tr> \r\n     <tr>\r\n      <th></th>\r\n      \r\n    </tr> -->\r\n   \r\n    <tr>\r\n      <tr>\r\n        <th>{{expense.result[10].Time}}</th>\r\n        <td  colspan=\"1\" class=\"stage-saturn\">{{expense.result[10].Event}}<span>{{expense.result[10].Speaker}}</span></td>\r\n        <td  colspan=\"2\" class=\"stage-mercury\">{{expense.result[10].Event2}}<span>{{expense.result[10].Speaker}}</span></td>\r\n        <td  colspan=\"1\" class=\"stage-saturn\">{{expense.result[10].Event3}}<span>{{expense.result[10].Speaker}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <th>{{expense.result[11].Time}}</th>\r\n          <td colspan=\"4\" class=\"stage-earth\">{{expense.result[11].Event}}<span>{{expense.result[11].Speaker}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <th>{{expense.result[12].Time}}</th>\r\n          <td colspan=\"4\" class=\"stage-mercury\">{{expense.result[12].Event}}<span>{{expense.result[12].Speaker}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <th>{{expense.result[13].Time}}</th>\r\n          <td colspan=\"4\" class=\"stage-mercury\">{{expense.result[13].Event}}<span>{{expense.result[13].Speaker}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <th>{{expense.result[14].Time}}</th>\r\n          <td colspan=\"4\" class=\"stage-saturn\">{{expense.result[14].Event}}<span>{{expense.result[14].Speaker}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <th>{{expense.result[15].Time}}</th>\r\n          <td colspan=\"4\" class=\"stage-saturn\">{{expense.result[15].Event}}<span>{{expense.result[15].Speaker}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <th>{{expense.result[16].Time}}</th>\r\n          <td colspan=\"4\" class=\"stage-earth\">{{expense.result[16].Event}}<span>{{expense.result[16].Speaker}}</span></td>\r\n        </tr>\r\n</table>\r\n  </body>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTicketTicketComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body\">\r\n    <br><br>\r\n    <h1>Convocation Seat Selection</h1>\r\n    <div class=\"container\">\r\n        <div class=\"w3ls-reg\">\r\n            <!-- input fields -->\r\n            <!-- <div class=\"inputForm\"> -->\r\n                <form ngNativeValidate >\r\n                <h2 style=\"font-weight: 250;\">Check your registration details below and select your seats :</h2>\r\n                <div class=\"mr_agilemain\">\r\n                    <div class=\"agileits-left\">\r\n                        <label class=\"mr_agilemain\"> Name\r\n                            <!-- <span>*</span> -->\r\n                        </label>\r\n                        <input [(ngModel)]=\"Name\" type=\"text\" id=\"name\" name=\"Name\" >\r\n                    </div>\r\n                    <div class=\"agileits-left\">\r\n                        <label class=\"mr_agilemain\"> Branch\r\n                            <!-- <span>*</span> -->\r\n                        </label>\r\n                        <input  [(ngModel)]=\"Branch\"  type=\"text\" id=\"branch\" name=\"Branch\" >\r\n                    </div>\r\n                    <div class=\"agileits-left\">\r\n                        <label class=\"mr_agilemain\"> Email \r\n                            <!-- <span>*</span> -->\r\n                        </label>\r\n                        <input   [(ngModel)]=\"Email\"  type=\"text\" id=\"email\" name=\"Email\" >\r\n                    </div>\r\n\r\n                    <!-- <div class=\"agileits-right\">\r\n                        <label> Branch\r\n                             <span>*</span> \r\n                        </label>\r\n                        <input type=\"number\" id=\"Numseats\"  required min=\"1\">\r\n                    </div> -->\r\n                </div>\r\n              \r\n            <!-- </div> -->\r\n            <!-- //input fields -->\r\n            <!-- seat availabilty list -->\r\n            <ul class=\"seat_w3ls\">\r\n                <li class=\"smallBox greenBox\">Selected/Booked Seat</li>\r\n\r\n                <li class=\"smallBox redBox\">Reserved Seat</li>\r\n\r\n                <li class=\"smallBox emptyBox\">Empty Seat</li>\r\n            </ul>\r\n            <!-- seat availabilty list -->\r\n            <!-- seat layout -->\r\n            <div class=\"seatStructure txt-center\"   >\r\n                <table id=\"seatsBlock\">\r\n                    <p id=\"notification\"></p>\r\n                    <tr>\r\n                        <td></td>\r\n                        <td>1</td>\r\n                        <td>2</td>\r\n                        <td>3</td>\r\n                        <td>4</td>\r\n                        <td>5</td>\r\n                        <td>6</td>\r\n                        <td>7</td>\r\n                        <td>8</td>\r\n                        <td>9</td>\r\n                        <td>10</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>11</td>\r\n                        <td>12</td>\r\n                        <td>13</td>\r\n                        <td>14</td>\r\n                        <td>15</td>\r\n                        <td>16</td>\r\n                        <td>17</td>\r\n                        <td>18</td>\r\n                        <td>19</td>\r\n                        <td>20</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>21</td>\r\n                        <td>22</td>\r\n                        <td>23</td>\r\n                        <td>24</td>\r\n                        <td>25</td>\r\n                        <td>26</td>\r\n                        <td>27</td>\r\n                        <td>28</td>\r\n                        <td>29</td>\r\n                        <td>30</td>\r\n                       \r\n                    </tr>\r\n                    <tr>\r\n                        <td>A</td>\r\n                        <td>\r\n                            <input type=\"checkbox\"   class=\"seats\" id=\"A1\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A1\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\"  class=\"seats\" id=\"A2\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A2\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A3\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A3\" >\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A4\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A4\" >\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A5\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A5\" >\r\n                        </td>\r\n                        \r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A6\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"A6\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\"  class=\"seats\" id=\"A7\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A7\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A8\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A8\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A9\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A9\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A10\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A10\">\r\n                        </td>\r\n                        <td class=\"seatGap\"></td>\r\n                        <td class=\"seatGap\"></td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A11\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A11\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A12\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A12\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A13\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A13\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A14\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A14\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A15\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A15\" >\r\n                        </td>\r\n                        \r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A16\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A16\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\"  class=\"seats\" id=\"A17\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A17\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A18\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A18\" >\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A19\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A19\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A20\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A20\">\r\n                        </td>\r\n                        <td class=\"seatGap\">       </td>\r\n                        <td class=\"seatGap\">       </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A21\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A21\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A22\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A22\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A23\"  (change)=\"checkCheckBoxValue(value,$event)\" value=\"A23\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A24\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A24\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A25\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A25\">\r\n                        </td>\r\n                        \r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A26\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"A26\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\"  class=\"seats\" id=\"A27\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A27\"> \r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A28\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A28\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A29\" (change)=\"checkCheckBoxValue(value,$event)\" value=\"A29\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"A30\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"A30\">\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td>B</td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B1\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B1\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B2\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B2\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B3\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B3\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B4\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B4\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B5\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B5\">\r\n                        </td>\r\n                       \r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B6\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B6\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B7\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B7\"> \r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B8\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B8\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B9\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B9\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B10\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B10\">\r\n                        </td>\r\n                        <td class=\"seatGap\"></td>\r\n                        <td class=\"seatGap\"></td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B11\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B11\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B12\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B12\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B13\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B13\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B14\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B14\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B15\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B15\">\r\n                        </td>\r\n                        \r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B16\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B16\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" id=\"A7\" class=\"seats\" id=\"B17\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B17\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B18\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B18\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B19\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B19\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B20\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B20\">\r\n                        </td>\r\n                        <td class=\"seatGap\"></td>\r\n                        <td class=\"seatGap\"></td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B21\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B21\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B22\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B22\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B23\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B23\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B24\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B24\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B25\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B25\">\r\n                        </td>\r\n                        \r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B26\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B26\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" id=\"A7\" class=\"seats\" id=\"B27\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B27\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B28\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B28\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B29\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B29\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"B30\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"B30\">\r\n                        </td>\r\n\r\n                        </tr>\r\n\r\n                    <tr>\r\n                        <td>C</td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C1\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C1\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C2\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C2\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C3\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C3\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C4\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C4\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C5\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C5\">\r\n                        </td>\r\n                       \r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C6\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C6\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C7\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C7\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C8\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C8\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C9\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C9\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C10\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C10\">\r\n                        </td>\r\n                        <td class=\"seatGap\"></td>\r\n                        <td class=\"seatGap\"></td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C11\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C11\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C12\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C12\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C13\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C13\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C14\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C14\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C15\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C15\">\r\n                        </td>\r\n                        \r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C16\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C16\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C17\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C17\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C18\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C18\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C19\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C19\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C20\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C20\">\r\n                        </td>\r\n                       \r\n\r\n                        <td class=\"seatGap\"></td>\r\n                        <td class=\"seatGap\"></td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C21\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C21\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C22\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C22\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C23\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C23\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C24\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C24\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C25\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C25\">\r\n                        </td>\r\n                        \r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C26\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C26\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C27\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C27\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C28\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C28\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C29\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C29\">\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"checkbox\" class=\"seats\" id=\"C30\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"C30\">\r\n                        </td>\r\n                       \r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td>D</td>\r\n                        \r\n  <td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D1\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D1\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D2\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D2\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D3\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D3\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D4\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D4\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D5\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D5\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D6\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D6\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D7\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D7\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D8\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D8\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D9\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D9\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D10\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D10\">\r\n</td>\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D11\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D11\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D12\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D12\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D13\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D13\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D14\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D14\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D15\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D15\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D16\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D16\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D17\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D17\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D18\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D18\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D19\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D19\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D20\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D20\">\r\n</td>\r\n\r\n\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D21\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D21\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D22\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D22\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D23\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D23\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D24\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D24\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D25\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D25\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D26\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D26\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D27\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D27\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D28\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D28\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D29\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D29\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"D30\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"D30\">\r\n</td>\r\n\r\n\r\n                    </tr>\r\n                    <tr><td>E</td>\r\n                       \r\n  <td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E1\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E1\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E2\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E2\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E3\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E3\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E4\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E4\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E5\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E5\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E6\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E6\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E7\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E7\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E8\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E8\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E9\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E9\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E10\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E10\">\r\n</td>\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E11\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E11\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E12\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E12\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E13\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E13\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E14\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E14\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E15\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E15\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E16\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E16\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E17\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E17\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E18\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E18\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E19\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E19\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E20\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E20\">\r\n</td>\r\n\r\n\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E21\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E21\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E22\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E22\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E23\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E23\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E24\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E24\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E25\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E25\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E26\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E26\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E27\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E27\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E28\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E28\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E29\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E29\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"E30\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"E30\">\r\n</td>\r\n\r\n\r\n                       \r\n                    </tr>\r\n                   \r\n                    <tr>\r\n                        <td>F</td>\r\n                       \r\n  <td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F1\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F1\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F2\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F2\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F3\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F3\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F4\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F4\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F5\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F5\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F6\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F6\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F7\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F7\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F8\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F8\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F9\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F9\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F10\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F10\">\r\n</td>\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F11\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F11\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F12\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F12\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F13\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F13\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F14\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F14\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F15\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F15\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F16\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F16\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F17\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F17\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F18\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F18\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F19\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F19\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F20\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F20\">\r\n</td>\r\n\r\n\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F21\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F21\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F22\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F22\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F23\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F23\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F24\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F24\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F25\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F25\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F26\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F26\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F27\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F27\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F28\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F28\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F29\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F29\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"F30\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"F30\">\r\n</td>\r\n\r\n\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td>G</td>\r\n                        \r\n  <td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G1\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G1\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G2\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G2\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G3\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G3\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G4\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G4\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G5\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G5\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G6\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G6\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G7\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G7\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G8\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G8\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G9\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G9\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G10\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G10\">\r\n</td>\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G11\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G11\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G12\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G12\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G13\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G13\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G14\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G14\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G15\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G15\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G16\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G16\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G17\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G17\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G18\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G18\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G19\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G19\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G20\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G20\">\r\n</td>\r\n\r\n\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G21\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G21\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G22\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G22\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G23\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G23\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G24\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G24\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G25\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G25\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G26\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G26\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G27\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G27\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G28\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G28\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G29\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G29\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"G30\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"G30\">\r\n</td>\r\n\r\n\r\n                    </tr>\r\n                 <tr>\r\n                     <td>H</td>\r\n                     \r\n  <td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H1\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H1\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H2\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H2\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H3\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H3\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H4\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H4\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H5\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H5\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H6\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H6\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H7\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H7\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H8\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H8\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H9\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H9\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H10\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H10\">\r\n</td>\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H11\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H11\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H12\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H12\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H13\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H13\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H14\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H14\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H15\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H15\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H16\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H16\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H17\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H17\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H18\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H18\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H19\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H19\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H20\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H20\">\r\n</td>\r\n\r\n\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H21\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H21\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H22\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H22\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H23\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H23\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H24\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H24\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H25\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H25\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H26\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H26\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H27\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H27\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H28\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H28\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H29\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H29\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"H30\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"H30\">\r\n</td>\r\n\r\n\r\n                 </tr>\r\n                 <tr>\r\n                     <td>I</td>\r\n                     \r\n  <td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I1\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I1\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I2\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I2\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I3\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I3\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I4\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I4\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I5\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I5\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I6\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I6\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I7\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I7\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I8\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I8\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I9\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I9\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I10\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I10\">\r\n</td>\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I11\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I11\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I12\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I12\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I13\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I13\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I14\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I14\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I15\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I15\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I16\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I16\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I17\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I17\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I18\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I18\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I19\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I19\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I20\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I20\">\r\n</td>\r\n\r\n\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I21\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I21\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I22\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I22\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I23\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I23\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I24\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I24\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I25\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I25\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I26\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I26\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I27\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I27\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I28\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I28\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I29\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I29\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"I30\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"I30\">\r\n</td>\r\n\r\n\r\n                 </tr>\r\n                 <tr>\r\n                     <td>J</td>\r\n                     \r\n  <td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J1\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J1\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J2\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J2\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J3\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J3\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J4\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J4\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J5\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J5\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J6\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J6\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J7\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J7\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J8\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J8\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J9\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J9\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J10\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J10\">\r\n</td>\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J11\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J11\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J12\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J12\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J13\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J13\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J14\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J14\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J15\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J15\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J16\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J16\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J17\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J17\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J18\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J18\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J19\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J19\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J20\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J20\">\r\n</td>\r\n\r\n\r\n<td class=\"seatGap\"></td>\r\n<td class=\"seatGap\"></td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J21\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J21\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J22\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J22\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J23\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J23\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J24\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J24\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J25\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J25\">\r\n</td>\r\n\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J26\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J26\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J27\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J27\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J28\" (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J28\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J29\"  (change)=\"checkCheckBoxValue(value,$any($event))\"  value=\"J29\">\r\n</td>\r\n<td>\r\n    <input type=\"checkbox\" class=\"seats\" id=\"J30\"  (change)=\"checkCheckBoxValue(value,$event)\"  value=\"J30\">\r\n</td>\r\n\r\n\r\n                 </tr>\r\n\r\n                </table>\r\n\r\n                <!-- <div class=\"screen\">\r\n                    <h2 class=\"wthree\">Screen this way</h2>\r\n                </div> -->\r\n                <br>\r\n                <button style=\"width: 200px;\" type=\"submit\" (click)=\"addseats()\" [disabled]=\"!isok\">Confirm Seat</button>\r\n                <p style=\"color: red; margin-top: 4px;\">*NOTE: Selection of seats less than the number of guests is not allowed. </p>\r\n                <br><br><br>\r\n            </div></form>\r\n          \r\n            <div style=\"margin-left: 180px;\" class=\"displayerBoxes txt-center\">\r\n                <table class=\"Displaytable w3ls-table\" width=\"100%\">\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Number of Seats</th>\r\n                        <th>Seats</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <textarea id=\"nameDisplay\" >{{Name}}</textarea>\r\n                        </td>\r\n                        <td>\r\n                            <textarea id=\"NumberDisplay\">{{Rgno}}</textarea>\r\n                        </td>\r\n                        <td>\r\n                            <textarea id=\"seatsDisplay\"  >{{seats.toString()}}</textarea>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <br>\r\n                <button style=\"margin-left: 174px; width: 200px;\" class=\"print\" type=\"submit\" [disabled]=\"!isok\" (click)=\"print()\">Print Seats</button>\r\n            </div>\r\n        </div>\r\n      \r\n    </div>\r\n    <br><br>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/admin.component.scss":
  /*!********************************************!*\
    !*** ./src/app/admin/admin.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  background-image: url(/assets/images/ctaeone.png);\n  height: 800px;\n}\n\n.login-box {\n  width: 700px;\n  padding: 40px;\n  top: 5%;\n  left: 25%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.7);\n  box-sizing: border-box;\n  border-radius: 10px;\n  height: 570px;\n}\n\n.login-box h2 {\n  margin: 0 0 30px;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n}\n\n.login-box .user-box {\n  position: relative;\n}\n\ndatalist {\n  background-color: #03e9f4;\n  color: linear-gradient(#141e30, #243b55);\n}\n\n.login-box .user-box input {\n  width: 100%;\n  padding: 10px 0;\n  font-size: 15px;\n  color: #fff;\n  font-family: \"Times New Roman\", Times, serif;\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background: transparent;\n}\n\n.login-box .user-box label {\n  position: absolute;\n  top: -20px;\n  left: 0;\n  padding: 10px 0;\n  font-size: 17px;\n  font-family: \"Times New Roman\", Times, serif;\n  color: #b6b6b6;\n  pointer-events: none;\n  transition: 0.1s;\n}\n\n.login-box form button {\n  position: relative;\n  display: inline-block;\n  padding: 10px 20px;\n  color: #b6b6b6;\n  font-size: 16px;\n  font-family: \"Times New Roman\", Times, serif;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  transition: 0.5s;\n  margin-top: 20px;\n  margin-right: 15px;\n  text-align: center;\n  letter-spacing: 1px;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.login-box button:hover {\n  background: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);\n  cursor: pointer;\n  color: black;\n}\n\n.login-box button span {\n  position: absolute;\n  display: block;\n}\n\n.login-box button span:nth-child(1) {\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #b6b6b6);\n  -webkit-animation: btn-anim1 1s linear infinite;\n          animation: btn-anim1 1s linear infinite;\n}\n\n@-webkit-keyframes btn-anim1 {\n  0% {\n    left: -100%;\n  }\n  50%, 100% {\n    left: 100%;\n  }\n}\n\n@keyframes btn-anim1 {\n  0% {\n    left: -100%;\n  }\n  50%, 100% {\n    left: 100%;\n  }\n}\n\n.login-box button span:nth-child(2) {\n  top: -100%;\n  right: 0;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(180deg, transparent, #b6b6b6);\n  -webkit-animation: btn-anim2 1s linear infinite;\n          animation: btn-anim2 1s linear infinite;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\n\n@-webkit-keyframes btn-anim2 {\n  0% {\n    top: -100%;\n  }\n  50%, 100% {\n    top: 100%;\n  }\n}\n\n@keyframes btn-anim2 {\n  0% {\n    top: -100%;\n  }\n  50%, 100% {\n    top: 100%;\n  }\n}\n\n.login-box button span:nth-child(3) {\n  bottom: 0;\n  right: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(270deg, transparent, #b6b6b6);\n  -webkit-animation: btn-anim3 1s linear infinite;\n          animation: btn-anim3 1s linear infinite;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n@-webkit-keyframes btn-anim3 {\n  0% {\n    right: -100%;\n  }\n  50%, 100% {\n    right: 100%;\n  }\n}\n\n@keyframes btn-anim3 {\n  0% {\n    right: -100%;\n  }\n  50%, 100% {\n    right: 100%;\n  }\n}\n\n.login-box button span:nth-child(4) {\n  bottom: -100%;\n  left: 0;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(360deg, transparent, #b6b6b6);\n  -webkit-animation: btn-anim4 1s linear infinite;\n          animation: btn-anim4 1s linear infinite;\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n\n@-webkit-keyframes btn-anim4 {\n  0% {\n    bottom: -100%;\n  }\n  50%, 100% {\n    bottom: 100%;\n  }\n}\n\n@keyframes btn-anim4 {\n  0% {\n    bottom: -100%;\n  }\n  50%, 100% {\n    bottom: 100%;\n  }\n}\n\n.outsidebuttons button {\n  position: relative;\n  display: inline-block;\n  padding: 10px 20px;\n  color: #dfdfdf;\n  font-size: 14px;\n  font-family: \"Times New Roman\", Times, serif;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  transition: 0.5s;\n  margin-top: 20px;\n  margin-right: 12px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.outsidebuttons button:hover {\n  background: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);\n  cursor: pointer;\n  color: black;\n}\n\n.outsidebuttons span {\n  position: absolute;\n  display: block;\n}\n\n.outsidebuttons span:nth-child(1) {\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #b6b6b6);\n  -webkit-animation: btn-anim1 1s linear infinite;\n          animation: btn-anim1 1s linear infinite;\n}\n\n@keyframes btn-anim1 {\n  0% {\n    left: -100%;\n  }\n  50%, 100% {\n    left: 100%;\n  }\n}\n\n.outsidebuttons span:nth-child(2) {\n  top: -100%;\n  right: 0;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(180deg, transparent, #b6b6b6);\n  -webkit-animation: btn-anim2 1s linear infinite;\n          animation: btn-anim2 1s linear infinite;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\n\n@keyframes btn-anim2 {\n  0% {\n    top: -100%;\n  }\n  50%, 100% {\n    top: 100%;\n  }\n}\n\n.outsidebuttons span:nth-child(3) {\n  bottom: 0;\n  right: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(270deg, transparent, #b6b6b6);\n  -webkit-animation: btn-anim3 1s linear infinite;\n          animation: btn-anim3 1s linear infinite;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n@keyframes btn-anim3 {\n  0% {\n    right: -100%;\n  }\n  50%, 100% {\n    right: 100%;\n  }\n}\n\n.outsidebuttons span:nth-child(4) {\n  bottom: -100%;\n  left: 0;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(360deg, transparent, #b6b6b6);\n  -webkit-animation: btn-anim4 1s linear infinite;\n          animation: btn-anim4 1s linear infinite;\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n\n@keyframes btn-anim4 {\n  0% {\n    bottom: -100%;\n  }\n  50%, 100% {\n    bottom: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRTpcXE5ldyBmb2xkZXJcXENvbnZvY2F0aW9uTWFuYWdlbWVudFxcQ29udm9jYXRpb25NYW5hZ2VtZW50L3NyY1xcYXBwXFxhZG1pblxcYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUdDLGlEQUFBO0VBQ0QsYUFBQTtBQ0FKOztBREdFO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDRCxPQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0MsOEJBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRko7O0FES0U7RUFDRyxrQkFBQTtBQ0ZMOztBRElFO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtBQ0ROOztBRElFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURLRTtFQUNHLGtCQUFBO0VBQ0QsVUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURNRTtFQUNHLGtCQUFBO0VBQ0QscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUNISjs7QURNRTtFQUNFLDREQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNISjs7QURNRTtFQUNHLGtCQUFBO0VBQ0QsY0FBQTtBQ0hKOztBRE1FO0VBQ0UsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdEQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ0hKOztBRE1FO0VBQ0U7SUFDRSxXQUFBO0VDSEo7RURLRTtJQUNFLFVBQUE7RUNISjtBQUNGOztBREhFO0VBQ0U7SUFDRSxXQUFBO0VDSEo7RURLRTtJQUNFLFVBQUE7RUNISjtBQUNGOztBRE1FO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlEQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNKSjs7QURPRTtFQUNFO0lBQ0UsVUFBQTtFQ0pKO0VETUU7SUFDRSxTQUFBO0VDSko7QUFDRjs7QURGRTtFQUNFO0lBQ0UsVUFBQTtFQ0pKO0VETUU7SUFDRSxTQUFBO0VDSko7QUFDRjs7QURPRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDTEo7O0FEUUU7RUFDRTtJQUNFLFlBQUE7RUNMSjtFRE9FO0lBQ0UsV0FBQTtFQ0xKO0FBQ0Y7O0FEREU7RUFDRTtJQUNFLFlBQUE7RUNMSjtFRE9FO0lBQ0UsV0FBQTtFQ0xKO0FBQ0Y7O0FEUUU7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseURBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ05KOztBRFNFO0VBQ0U7SUFDRSxhQUFBO0VDTko7RURRRTtJQUNFLFlBQUE7RUNOSjtBQUNGOztBREFFO0VBQ0U7SUFDRSxhQUFBO0VDTko7RURRRTtJQUNFLFlBQUE7RUNOSjtBQUNGOztBRFVFO0VBQ0Usa0JBQUE7RUFDRCxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0NBQUE7QUNUSDs7QURZQztFQUNFLDREQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNUSDs7QURZQztFQUNHLGtCQUFBO0VBQ0QsY0FBQTtBQ1RIOztBRFlDO0VBQ0UsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdEQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ1RIOztBRFlDO0VBQ0U7SUFDRSxXQUFBO0VDVEg7RURXQztJQUNFLFVBQUE7RUNUSDtBQUNGOztBRFlDO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlEQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNWSDs7QURhQztFQUNFO0lBQ0UsVUFBQTtFQ1ZIO0VEWUM7SUFDRSxTQUFBO0VDVkg7QUFDRjs7QURhQztFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDWEg7O0FEY0M7RUFDRTtJQUNFLFlBQUE7RUNYSDtFRGFDO0lBQ0UsV0FBQTtFQ1hIO0FBQ0Y7O0FEY0M7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseURBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ1pIOztBRGVDO0VBQ0U7SUFDRSxhQUFBO0VDWkg7RURjQztJQUNFLFlBQUE7RUNaSDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxNDFlMzAsICMyNDNiNTUpO1xyXG4gICAgLy9iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgvYXNzZXRzL2ltYWdlcy9jdGFlb25lLnBuZyk7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYm94IHtcclxuIFxyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgdG9wOiA1JTtcclxuICAgbGVmdDogMjUlO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIC8vIGJveC1zaGFkb3c6IDAgMTVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDU3MHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYm94IGgyIHtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1ib3ggLnVzZXItYm94IHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIGRhdGFsaXN0e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlOWY0O1xyXG4gICAgICBjb2xvcjpsaW5lYXItZ3JhZGllbnQoIzE0MWUzMCwgIzI0M2I1NSkgO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYm94IC51c2VyLWJveCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmxvZ2luLWJveCAudXNlci1ib3ggbGFiZWwge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTIwcHg7O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuMTBzO1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gIC5sb2dpbi1ib3ggZm9ybSBidXR0b24ge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJveCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QzZDNkMyAwJSwgIzU3NjA2ZiA3NCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tYm94IGJ1dHRvbiBzcGFuIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJveCBidXR0b24gc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiKDE4MiwgMTgyLCAxODIpKTtcclxuICAgIGFuaW1hdGlvbjogYnRuLWFuaW0xIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBidG4tYW5pbTEge1xyXG4gICAgMCUge1xyXG4gICAgICBsZWZ0OiAtMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSwxMDAlIHtcclxuICAgICAgbGVmdDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJveCBidXR0b24gc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHRyYW5zcGFyZW50LCByZ2IoMTgyLCAxODIsIDE4MikpO1xyXG4gICAgYW5pbWF0aW9uOiBidG4tYW5pbTIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuMjVzXHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYnRuLWFuaW0yIHtcclxuICAgIDAlIHtcclxuICAgICAgdG9wOiAtMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSwxMDAlIHtcclxuICAgICAgdG9wOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubG9naW4tYm94IGJ1dHRvbiBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgdHJhbnNwYXJlbnQsIHJnYigxODIsIDE4MiwgMTgyKSk7XHJcbiAgICBhbmltYXRpb246IGJ0bi1hbmltMyAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC41c1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJ0bi1hbmltMyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSwxMDAlIHtcclxuICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1ib3ggYnV0dG9uIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgIGJvdHRvbTogLTEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsIHRyYW5zcGFyZW50LCByZ2IoMTgyLCAxODIsIDE4MikpO1xyXG4gICAgYW5pbWF0aW9uOiBidG4tYW5pbTQgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuNzVzXHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYnRuLWFuaW00IHtcclxuICAgIDAlIHtcclxuICAgICAgYm90dG9tOiAtMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSwxMDAlIHtcclxuICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5vdXRzaWRlYnV0dG9ucyBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcclxuIH1cclxuIFxyXG4gLm91dHNpZGVidXR0b25zIGJ1dHRvbjpob3ZlciB7XHJcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBcclxuIC5vdXRzaWRlYnV0dG9ucyBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiB9XHJcbiBcclxuIC5vdXRzaWRlYnV0dG9ucyBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgIHRvcDogMDtcclxuICAgbGVmdDogLTEwMCU7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDJweDtcclxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiKDE4MiwgMTgyLCAxODIpKTtcclxuICAgYW5pbWF0aW9uOiBidG4tYW5pbTEgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gfVxyXG4gXHJcbiBAa2V5ZnJhbWVzIGJ0bi1hbmltMSB7XHJcbiAgIDAlIHtcclxuICAgICBsZWZ0OiAtMTAwJTtcclxuICAgfVxyXG4gICA1MCUsMTAwJSB7XHJcbiAgICAgbGVmdDogMTAwJTtcclxuICAgfVxyXG4gfVxyXG4gXHJcbiAub3V0c2lkZWJ1dHRvbnMgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICB0b3A6IC0xMDAlO1xyXG4gICByaWdodDogMDtcclxuICAgd2lkdGg6IDJweDtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCwgcmdiKDE4MiwgMTgyLCAxODIpKTtcclxuICAgYW5pbWF0aW9uOiBidG4tYW5pbTIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICBhbmltYXRpb24tZGVsYXk6IC4yNXNcclxuIH1cclxuIFxyXG4gQGtleWZyYW1lcyBidG4tYW5pbTIge1xyXG4gICAwJSB7XHJcbiAgICAgdG9wOiAtMTAwJTtcclxuICAgfVxyXG4gICA1MCUsMTAwJSB7XHJcbiAgICAgdG9wOiAxMDAlO1xyXG4gICB9XHJcbiB9XHJcbiBcclxuIC5vdXRzaWRlYnV0dG9ucyBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgIGJvdHRvbTogMDtcclxuICAgcmlnaHQ6IC0xMDAlO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAycHg7XHJcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHRyYW5zcGFyZW50LCByZ2IoMTgyLCAxODIsIDE4MikpO1xyXG4gICBhbmltYXRpb246IGJ0bi1hbmltMyAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgIGFuaW1hdGlvbi1kZWxheTogLjVzXHJcbiB9XHJcbiBcclxuIEBrZXlmcmFtZXMgYnRuLWFuaW0zIHtcclxuICAgMCUge1xyXG4gICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgfVxyXG4gICA1MCUsMTAwJSB7XHJcbiAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgIH1cclxuIH1cclxuIFxyXG4gLm91dHNpZGVidXR0b25zIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgYm90dG9tOiAtMTAwJTtcclxuICAgbGVmdDogMDtcclxuICAgd2lkdGg6IDJweDtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCB0cmFuc3BhcmVudCwgcmdiKDE4MiwgMTgyLCAxODIpKTtcclxuICAgYW5pbWF0aW9uOiBidG4tYW5pbTQgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICBhbmltYXRpb24tZGVsYXk6IC43NXNcclxuIH1cclxuIFxyXG4gQGtleWZyYW1lcyBidG4tYW5pbTQge1xyXG4gICAwJSB7XHJcbiAgICAgYm90dG9tOiAtMTAwJTtcclxuICAgfVxyXG4gICA1MCUsMTAwJSB7XHJcbiAgICAgYm90dG9tOiAxMDAlO1xyXG4gICB9XHJcbiAgfVxyXG4gIFxyXG4gICIsImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY3RhZW9uZS5wbmcpO1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuXG4ubG9naW4tYm94IHtcbiAgd2lkdGg6IDcwMHB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICB0b3A6IDUlO1xuICBsZWZ0OiAyNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDU3MHB4O1xufVxuXG4ubG9naW4tYm94IGgyIHtcbiAgbWFyZ2luOiAwIDAgMzBweDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWJveCAudXNlci1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmRhdGFsaXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzZTlmNDtcbiAgY29sb3I6IGxpbmVhci1ncmFkaWVudCgjMTQxZTMwLCAjMjQzYjU1KTtcbn1cblxuLmxvZ2luLWJveCAudXNlci1ib3ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmxvZ2luLWJveCAudXNlci1ib3ggbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBjb2xvcjogI2I2YjZiNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMXM7XG59XG5cbi5sb2dpbi1ib3ggZm9ybSBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBjb2xvcjogI2I2YjZiNjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5sb2dpbi1ib3ggYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QzZDNkMyAwJSwgIzU3NjA2ZiA3NCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxvZ2luLWJveCBidXR0b24gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dpbi1ib3ggYnV0dG9uIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAjYjZiNmI2KTtcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTEgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbn1cbi5sb2dpbi1ib3ggYnV0dG9uIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgdG9wOiAtMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdHJhbnNwYXJlbnQsICNiNmI2YjYpO1xuICBhbmltYXRpb246IGJ0bi1hbmltMiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4yNXM7XG59XG5cbkBrZXlmcmFtZXMgYnRuLWFuaW0yIHtcbiAgMCUge1xuICAgIHRvcDogLTEwMCU7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICB0b3A6IDEwMCU7XG4gIH1cbn1cbi5sb2dpbi1ib3ggYnV0dG9uIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogLTEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgdHJhbnNwYXJlbnQsICNiNmI2YjYpO1xuICBhbmltYXRpb246IGJ0bi1hbmltMyAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbn1cblxuQGtleWZyYW1lcyBidG4tYW5pbTMge1xuICAwJSB7XG4gICAgcmlnaHQ6IC0xMDAlO1xuICB9XG4gIDUwJSwgMTAwJSB7XG4gICAgcmlnaHQ6IDEwMCU7XG4gIH1cbn1cbi5sb2dpbi1ib3ggYnV0dG9uIHNwYW46bnRoLWNoaWxkKDQpIHtcbiAgYm90dG9tOiAtMTAwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCB0cmFuc3BhcmVudCwgI2I2YjZiNik7XG4gIGFuaW1hdGlvbjogYnRuLWFuaW00IDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbn1cblxuQGtleWZyYW1lcyBidG4tYW5pbTQge1xuICAwJSB7XG4gICAgYm90dG9tOiAtMTAwJTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIGJvdHRvbTogMTAwJTtcbiAgfVxufVxuLm91dHNpZGVidXR0b25zIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiAjZGZkZmRmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm91dHNpZGVidXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5vdXRzaWRlYnV0dG9ucyBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm91dHNpZGVidXR0b25zIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAjYjZiNmI2KTtcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTEgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbn1cbi5vdXRzaWRlYnV0dG9ucyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogLTEwMCU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHRyYW5zcGFyZW50LCAjYjZiNmI2KTtcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTIgMXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMiB7XG4gIDAlIHtcbiAgICB0b3A6IC0xMDAlO1xuICB9XG4gIDUwJSwgMTAwJSB7XG4gICAgdG9wOiAxMDAlO1xuICB9XG59XG4ub3V0c2lkZWJ1dHRvbnMgc3BhbjpudGgtY2hpbGQoMykge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAtMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCB0cmFuc3BhcmVudCwgI2I2YjZiNik7XG4gIGFuaW1hdGlvbjogYnRuLWFuaW0zIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMyB7XG4gIDAlIHtcbiAgICByaWdodDogLTEwMCU7XG4gIH1cbiAgNTAlLCAxMDAlIHtcbiAgICByaWdodDogMTAwJTtcbiAgfVxufVxuLm91dHNpZGVidXR0b25zIHNwYW46bnRoLWNoaWxkKDQpIHtcbiAgYm90dG9tOiAtMTAwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCB0cmFuc3BhcmVudCwgI2I2YjZiNik7XG4gIGFuaW1hdGlvbjogYnRuLWFuaW00IDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbn1cblxuQGtleWZyYW1lcyBidG4tYW5pbTQge1xuICAwJSB7XG4gICAgYm90dG9tOiAtMTAwJTtcbiAgfVxuICA1MCUsIDEwMCUge1xuICAgIGJvdHRvbTogMTAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../member.service */
    "./src/app/member.service.ts");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! SweetAlert */
    "./node_modules/SweetAlert/dist/sweetalert.min.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(SweetAlert__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(auth, lock, memberService, router) {
        _classCallCheck(this, AdminComponent);

        this.auth = auth;
        this.lock = lock;
        this.memberService = memberService;
        this.router = router;
        this.i = 0;
        memberService.getstudents();
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.auth.logout();
          this.lock.back();
        }
      }, {
        key: "branches",
        value: function branches() {
          this.router.navigateByUrl('/branches');
        }
      }, {
        key: "submitstudent",
        value: function submitstudent(formData) {
          console.log(formData);
          this.memberService.addStudent(formData.value);
          this.memberService.addStudentdata(formData.value);
          formData.resetForm(); // this.router.navigateByUrl('/home')
        }
      }, {
        key: "clearit",
        value: function clearit() {
          for (this.i = 0; this.i < this.memberService.students.length; this.i++) {
            this.memberService.deleteStudent(this.memberService.students[this.i].id);
          }

          SweetAlert__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Previous Students Deleted Successfully",
            // text: "Hospital registered successfully",
            icon: "success"
          });
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/admin/admin.component.scss"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _awards_awards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./awards/awards.component */
    "./src/app/awards/awards.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./schedule/schedule.component */
    "./src/app/schedule/schedule.component.ts");
    /* harmony import */


    var _graduates_graduates_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./graduates/graduates.component */
    "./src/app/graduates/graduates.component.ts");
    /* harmony import */


    var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ticket/ticket.component */
    "./src/app/ticket/ticket.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _display_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./display/display.component */
    "./src/app/display/display.component.ts");
    /* harmony import */


    var _branches_branches_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./branches/branches.component */
    "./src/app/branches/branches.component.ts");
    /* harmony import */


    var _previousstudents_previousstudents_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./previousstudents/previousstudents.component */
    "./src/app/previousstudents/previousstudents.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'schedule',
      component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    }, {
      path: 'awards',
      component: _awards_awards_component__WEBPACK_IMPORTED_MODULE_3__["AwardsComponent"]
    }, {
      path: 'contact',
      component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__["ContactusComponent"]
    }, {
      path: 'graduates',
      component: _graduates_graduates_component__WEBPACK_IMPORTED_MODULE_8__["GraduatesComponent"]
    }, {
      path: 'ticket',
      component: _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__["TicketComponent"]
    }, {
      path: 'display',
      component: _display_display_component__WEBPACK_IMPORTED_MODULE_11__["DisplayComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"]
    }, {
      path: 'branches',
      component: _branches_branches_component__WEBPACK_IMPORTED_MODULE_12__["BranchesComponent"]
    }, {
      path: 'students/:a',
      component: _previousstudents_previousstudents_component__WEBPACK_IMPORTED_MODULE_13__["PreviousstudentsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./member.service */
    "./src/app/member.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(expense) {
        _classCallCheck(this, AppComponent);

        this.expense = expense;
        this.title = 'ConvocationManagement';
        expense.getschedule();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./schedule/schedule.component */
    "./src/app/schedule/schedule.component.ts");
    /* harmony import */


    var _awards_awards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./awards/awards.component */
    "./src/app/awards/awards.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/analytics/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _graduates_graduates_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./graduates/graduates.component */
    "./src/app/graduates/graduates.component.ts");
    /* harmony import */


    var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./ticket/ticket.component */
    "./src/app/ticket/ticket.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _display_display_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./display/display.component */
    "./src/app/display/display.component.ts");
    /* harmony import */


    var _branches_branches_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./branches/branches.component */
    "./src/app/branches/branches.component.ts");
    /* harmony import */


    var _previousstudents_previousstudents_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./previousstudents/previousstudents.component */
    "./src/app/previousstudents/previousstudents.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleComponent"], _awards_awards_component__WEBPACK_IMPORTED_MODULE_8__["AwardsComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _graduates_graduates_component__WEBPACK_IMPORTED_MODULE_19__["GraduatesComponent"], _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_20__["TicketComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_22__["DisplayComponent"], _branches_branches_component__WEBPACK_IMPORTED_MODULE_23__["BranchesComponent"], _previousstudents_previousstudents_component__WEBPACK_IMPORTED_MODULE_24__["PreviousstudentsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(router, auth) {
        var _this = this;

        _classCallCheck(this, AuthService);

        this.router = router;
        this.auth = auth;
        this.isSignedIn = false;
        auth.user.subscribe(function (res) {
          console.log(res);

          if (res.uid) {
            // this.loggedinuserid=res.uid;
            _this.isSignedIn = true;
          } else {
            _this.isSignedIn = false;
          }
        });
      }

      _createClass(AuthService, [{
        key: "signIn",
        value: function signIn(email, password) {
          var _this2 = this;

          return this.auth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
            _this2.isSignedIn = true;
            _this2.loggedinuserid = res.user.uid;

            _this2.router.navigateByUrl('/admin');

            console.log("signedin");
          })["catch"](function (res) {
            alert(res);
          });
        }
      }, {
        key: "isUserSignedIn",
        value: function isUserSignedIn() {
          return this.isSignedIn;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isSignedIn = false;
          this.auth.auth.signOut();
          console.log("loggedout");
        }
      }, {
        key: "getuserid",
        value: function getuserid() {
          return this.loggedinuserid;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/awards/awards.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/awards/awards.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAwardsAwardsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Asap+Condensed:600i,700\");\nbody {\n  background-color: white;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  text-transform: uppercase;\n  font-family: \"Times New Roman\", Times, serif;\n}\ntop {\n  width: 100%;\n  min-height: 100vh;\n}\na:hover {\n  color: rgba(255, 166, 0, 0.904);\n}\nh1 {\n  font-size: 55px;\n}\nh3 {\n  font-size: 26px;\n}\nh1:hover {\n  cursor: pointer;\n}\n.italic {\n  font-style: italic;\n}\n.card {\n  position: relative;\n  margin-left: 117px;\n  margin-top: 150px;\n  height: 300px;\n  width: 500px;\n  text-align: center;\n  background: linear-gradient(#1d1b1b, rgba(22, 22, 22, 0.411), #383638);\n  border-radius: 2px;\n  box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.3);\n  color: #fff;\n  padding: 30px;\n}\n.card header {\n  position: absolute;\n  top: 31px;\n  left: 0;\n  width: 100%;\n  padding: 0 10%;\n  transform: translateY(-50%);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n.card header > *:first-child {\n  text-align: left;\n}\n.card header > *:last-child {\n  text-align: right;\n}\n.logo {\n  font-size: 24px;\n  position: relative;\n}\n.logo:before,\n.logo:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  border-top: 3px solid currentColor;\n  transform: translateY(-50%);\n}\n.logo:before {\n  right: 158px;\n  width: 40%;\n}\n.logo:after {\n  left: 158px;\n  width: 55%;\n}\n.logo span {\n  /*border: solid currentColor;\n  border-width: 0 3px 3px 0;\n  position: absolute;\n  top: -22px;\n  width: 69px;\n  height: 70px;\n  left: 50%;\n  transform: translateX(-58%) rotate(58deg) skew(0deg, -30deg);*/\n  display: block;\n  position: absolute;\n  width: 100%;\n  top: calc(50% - 1px);\n}\n.announcement {\n  position: relative;\n  border: 3px solid currentColor;\n  border-top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.announcement:before,\n.announcement:after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  border-top: 3px solid currentColor;\n  height: 0;\n  width: 15px;\n}\n.announcement:before {\n  left: -3px;\n}\n.announcement:after {\n  right: -3px;\n}\n.inspiration {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml, body {\n  height: 100%;\n}\na,\na:visited,\na:focus,\na:active,\na:link {\n  text-decoration: none;\n  outline: 0;\n}\na {\n  color: currentColor;\n  transition: 0.2s ease-in-out;\n}\nh1, h2, h3, h4 {\n  margin: 0.15em 0;\n}\nul {\n  padding: 0;\n  list-style: none;\n}\nimg {\n  vertical-align: middle;\n  height: auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXdhcmRzL0U6XFxOZXcgZm9sZGVyXFxDb252b2NhdGlvbk1hbmFnZW1lbnRcXENvbnZvY2F0aW9uTWFuYWdlbWVudC9zcmNcXGFwcFxcYXdhcmRzXFxhd2FyZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F3YXJkcy9hd2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFFUjtFQUVJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNELHlCQUFBO0VBQ0MsNENBQUE7QUNESjtBRElFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDREo7QURJRTtFQUNFLCtCQUFBO0FDREo7QURJRTtFQUNFLGVBQUE7QUNESjtBREdFO0VBQ0UsZUFBQTtBQ0FKO0FERUU7RUFDRSxlQUFBO0FDQ0o7QURDRTtFQUNFLGtCQUFBO0FDRUo7QURDRTtFQUNFLGtCQUFBO0VBQ0gsa0JBQUE7RUFFRyxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxzRUFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDQUo7QURHRTtFQUNFLGdCQUFBO0FDQUo7QURFRTtFQUNFLGlCQUFBO0FDQ0o7QURFRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0U7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7QUNFSjtBRENFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNFSjtBREFFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNHSjtBREFFO0VBQ0U7Ozs7Ozs7Z0VBQUE7RUFRQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNHSjtBREFFO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHSjtBREFFOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDR0o7QURERTtFQUNFLFVBQUE7QUNJSjtBREZFO0VBQ0UsV0FBQTtBQ0tKO0FEREU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSUo7QURNRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtBQ0hKO0FETUU7Ozs7O0VBS0UscUJBQUE7RUFDQSxVQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QUNISjtBRE1FO0VBQ0UsZ0JBQUE7QUNISjtBRE1FO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDSEo7QURNRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2F3YXJkcy9hd2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFzYXArQ29uZGVuc2VkOjYwMGksNzAwJyk7XHJcblxyXG5ib2R5IHtcclxuICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gfVxyXG5cclxuICB0b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBcclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC45MDQpO1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbiAgaDE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5pdGFsaWMge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiBtYXJnaW4tbGVmdDogMTE3cHg7XHJcbiAgIFxyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDI5LCAyNywgMjcpLCByZ2IoMTQsIDEzLCAxMyksIHJnYig1NiwgNTQsIDU2KSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDI5LCAyNywgMjcpLCByZ2JhKDIyLCAyMiwgMjIsIDAuNDExKSwgcmdiKDU2LCA1NCwgNTYpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggLTNweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCBoZWFkZXIgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5jYXJkIGhlYWRlciA+ICo6bGFzdC1jaGlsZCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAubG9nbzpiZWZvcmUsXHJcbiAgLmxvZ286YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvOmJlZm9yZSB7XHJcbiAgICByaWdodDogMTU4cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICAubG9nbzphZnRlciB7XHJcbiAgICBsZWZ0OiAxNThweDtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvIHNwYW4ge1xyXG4gICAgLypib3JkZXI6IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yMnB4O1xyXG4gICAgd2lkdGg6IDY5cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTU4JSkgcm90YXRlKDU4ZGVnKSBza2V3KDBkZWcsIC0zMGRlZyk7Ki9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcclxuICB9XHJcbiAgXHJcbiAgLmFubm91bmNlbWVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFubm91bmNlbWVudDpiZWZvcmUsXHJcbiAgLmFubm91bmNlbWVudDphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gIH1cclxuICAuYW5ub3VuY2VtZW50OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAtM3B4O1xyXG4gIH1cclxuICAuYW5ub3VuY2VtZW50OmFmdGVyIHtcclxuICAgIHJpZ2h0OiAtM3B4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaW5zcGlyYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGEsXHJcbiAgYTp2aXNpdGVkLFxyXG4gIGE6Zm9jdXMsXHJcbiAgYTphY3RpdmUsXHJcbiAgYTpsaW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgaDEsIGgyLCBoMywgaDQge1xyXG4gICAgbWFyZ2luOiAuMTVlbSAwO1xyXG4gIH1cclxuICBcclxuICB1bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXNhcCtDb25kZW5zZWQ6NjAwaSw3MDBcIik7XG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxudG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuOTA0KTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDU1cHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG5oMTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxMTdweDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzFkMWIxYiwgcmdiYSgyMiwgMjIsIDIyLCAwLjQxMSksICMzODM2MzgpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uY2FyZCBoZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzFweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIGhlYWRlciA+ICo6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2FyZCBoZWFkZXIgPiAqOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ286YmVmb3JlLFxuLmxvZ286YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgY3VycmVudENvbG9yO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5sb2dvOmJlZm9yZSB7XG4gIHJpZ2h0OiAxNThweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmxvZ286YWZ0ZXIge1xuICBsZWZ0OiAxNThweDtcbiAgd2lkdGg6IDU1JTtcbn1cblxuLmxvZ28gc3BhbiB7XG4gIC8qYm9yZGVyOiBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjJweDtcbiAgd2lkdGg6IDY5cHg7XG4gIGhlaWdodDogNzBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTU4JSkgcm90YXRlKDU4ZGVnKSBza2V3KDBkZWcsIC0zMGRlZyk7Ki9cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xufVxuXG4uYW5ub3VuY2VtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDNweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGJvcmRlci10b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5ub3VuY2VtZW50OmJlZm9yZSxcbi5hbm5vdW5jZW1lbnQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgY3VycmVudENvbG9yO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4uYW5ub3VuY2VtZW50OmJlZm9yZSB7XG4gIGxlZnQ6IC0zcHg7XG59XG5cbi5hbm5vdW5jZW1lbnQ6YWZ0ZXIge1xuICByaWdodDogLTNweDtcbn1cblxuLmluc3BpcmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmZvY3VzLFxuYTphY3RpdmUsXG5hOmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5cbmEge1xuICBjb2xvcjogY3VycmVudENvbG9yO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5oMSwgaDIsIGgzLCBoNCB7XG4gIG1hcmdpbjogMC4xNWVtIDA7XG59XG5cbnVsIHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/awards/awards.component.ts":
  /*!********************************************!*\
    !*** ./src/app/awards/awards.component.ts ***!
    \********************************************/

  /*! exports provided: AwardsComponent */

  /***/
  function srcAppAwardsAwardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AwardsComponent", function () {
      return AwardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AwardsComponent = /*#__PURE__*/function () {
      function AwardsComponent() {
        _classCallCheck(this, AwardsComponent);
      }

      _createClass(AwardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AwardsComponent;
    }();

    AwardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-awards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./awards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/awards/awards.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./awards.component.scss */
      "./src/app/awards/awards.component.scss"))["default"]]
    })], AwardsComponent);
    /***/
  },

  /***/
  "./src/app/branches/branches.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/branches/branches.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBranchesBranchesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  text-decoration: none !important;\n}\n\nsection {\n  -webkit-filter: blur();\n          filter: blur();\n}\n\n.section-title {\n  font-weight: 400;\n  font-size: 28px;\n  color: white;\n  margin-top: 0px;\n}\n\n.section-title {\n  color: #ffffff;\n}\n\n.center-text {\n  text-align: center;\n  font-weight: 400;\n  font-size: 16px;\n  color: white;\n  line-height: 28px;\n  letter-spacing: 1px;\n}\n\n.center-text.colored {\n  color: white;\n}\n\n.services-small-item {\n  display: block;\n  background-color: #000000;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);\n  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);\n  border-radius: 5px;\n  padding: 10px 8px;\n  text-align: center;\n  transition: all 0.3s ease 0s;\n  position: relative;\n  z-index: 2;\n  margin-bottom: 30px;\n  max-height: 350px;\n}\n\n.services-small-item:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  border-radius: 5px;\n  background-image: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);\n  transition: all 0.3s ease 0s;\n  opacity: 0;\n}\n\n.services-small-item.active:before, .services-small-item:hover:before {\n  opacity: 1;\n}\n\n.services-small-item.active .icon:before, .services-small-item:hover .icon:before {\n  opacity: 0.26;\n}\n\n.services-small-item.active .icon i, .services-small-item:hover .icon i {\n  background: -webkit-linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.services-small-item.active .services-title, .services-small-item:hover .services-title {\n  color: #ffffff;\n}\n\n.services-small-item.active p, .services-small-item:hover p {\n  color: #ffffff;\n}\n\n.services-small-item.active .button i, .services-small-item:hover .button i {\n  background-image: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%) !important;\n  color: black !important;\n}\n\n.services-small-item:hover {\n  margin-top: -15px;\n}\n\n.services-small-item .icon {\n  width: 139px;\n  height: 113px;\n  margin: auto;\n  position: relative;\n  margin-bottom: 10px;\n  margin-top: 6px;\n  transition: all 0.3s ease 0s;\n}\n\n.services-small-item .icon i {\n  display: block;\n  height: 120px;\n  line-height: 67px;\n  position: absolute;\n  width: 100%;\n  top: 12px;\n  z-index: 2;\n  font-size: 40px;\n  background-image: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  transition: all 0.3s ease 0s;\n}\n\n.services-small-item .services-title {\n  font-weight: 400;\n  font-size: 16px;\n  color: white;\n  letter-spacing: 0.7px;\n  margin-bottom: 15px;\n  position: relative;\n  z-index: 2;\n  transition: all 0.3s ease 0s;\n}\n\n.services-small-item p {\n  font-weight: 400;\n  font-size: 14px;\n  color: white;\n  letter-spacing: 0.88px;\n  line-height: 26px;\n  position: relative;\n  z-index: 2;\n  transition: all 0.3s ease 0s;\n  margin-bottom: 30px;\n}\n\n.services-small-item .button {\n  position: relative;\n  z-index: 2;\n}\n\n.services-small-item .button i {\n  width: 42px;\n  height: 42px;\n  background-image: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);\n  line-height: 42px;\n  text-align: center;\n  border-radius: 100px;\n  color: #fff;\n  cursor: pointer;\n  padding-left: 3px;\n}\n\n.services-small-item .button:hover {\n  cursor: pointer;\n}\n\n.services-small-item:hover + .item-bg {\n  bottom: 30px;\n}\n\n.item-bg {\n  content: \"\";\n  position: absolute;\n  width: 80%;\n  height: 15px;\n  bottom: 15px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  z-index: 1;\n  background: #fff;\n  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);\n  transition: all 0.3s ease 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmNoZXMvRTpcXE5ldyBmb2xkZXJcXENvbnZvY2F0aW9uTWFuYWdlbWVudFxcQ29udm9jYXRpb25NYW5hZ2VtZW50L3NyY1xcYXBwXFxicmFuY2hlc1xcYnJhbmNoZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JyYW5jaGVzL2JyYW5jaGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUVJLHNCQUFBO1VBQUEsY0FBQTtBQ0FKOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQztFQUNDLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURPQTtFQUNFLGNBQUE7RUFFQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFJQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtFQUFBO0VBSUEsNEJBQUE7RUFDQSxVQUFBO0FDTEY7O0FET0E7RUFDRSxVQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDRSxvRUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURPQTtFQUNFLDZFQUFBO0VBQ0EsdUJBQUE7QUNKRjs7QURPQTtFQUNFLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUlBLDRCQUFBO0FDSkY7O0FEUUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0VBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBSUEsNEJBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBSUEsNEJBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBSUEsNEJBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtFQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE1BO0VBQ0UsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBSUEsNEJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaGVzL2JyYW5jaGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuc2VjdGlvbntcclxuIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXGFzc2V0c1xcaW1hZ2VzXFxiYWNrZ3JvdW5kLmpwZyk7XHJcbiAgICBmaWx0ZXI6IGJsdXIoKTtcclxufVxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuIC5zZWN0aW9uLXRpdGxlIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNlbnRlci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAvLyBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uY2VudGVyLXRleHQuY29sb3JlZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2VudGVyLXRleHQgcCB7XHJcbiAvLyBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMtc21hbGwtaXRlbSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0OHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweCA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgbWF4LWhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1zbWFsbC1pdGVtOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5zZXJ2aWNlcy1zbWFsbC1pdGVtLmFjdGl2ZTpiZWZvcmUsIC5zZXJ2aWNlcy1zbWFsbC1pdGVtOmhvdmVyOmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNlcnZpY2VzLXNtYWxsLWl0ZW0uYWN0aXZlIC5pY29uOmJlZm9yZSwgLnNlcnZpY2VzLXNtYWxsLWl0ZW06aG92ZXIgLmljb246YmVmb3JlIHtcclxuICBvcGFjaXR5OiAuMjY7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1zbWFsbC1pdGVtLmFjdGl2ZSAuaWNvbiBpLCAuc2VydmljZXMtc21hbGwtaXRlbTpob3ZlciAuaWNvbiBpIHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1zbWFsbC1pdGVtLmFjdGl2ZSAuc2VydmljZXMtdGl0bGUsIC5zZXJ2aWNlcy1zbWFsbC1pdGVtOmhvdmVyIC5zZXJ2aWNlcy10aXRsZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1zbWFsbC1pdGVtLmFjdGl2ZSBwLCAuc2VydmljZXMtc21hbGwtaXRlbTpob3ZlciBwIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNlcnZpY2VzLXNtYWxsLWl0ZW0uYWN0aXZlIC5idXR0b24gaSwgLnNlcnZpY2VzLXNtYWxsLWl0ZW06aG92ZXIgLmJ1dHRvbiBpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDNkM2QzIDAlLCAjNTc2MDZmIDc0JSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlcnZpY2VzLXNtYWxsLWl0ZW06aG92ZXIge1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG4uc2VydmljZXMtc21hbGwtaXRlbSAuaWNvbiB7XHJcbiAgd2lkdGg6IDEzOXB4O1xyXG4gIGhlaWdodDogMTEzcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcy1zbWFsbC1pdGVtIC5pY29uIGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMTJweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDNkM2QzIDAlLCAjNTc2MDZmIDc0JSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uc2VydmljZXMtc21hbGwtaXRlbSAuc2VydmljZXMtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLnNlcnZpY2VzLXNtYWxsLWl0ZW0gcCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjg4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzLXNtYWxsLWl0ZW0gLmJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1zbWFsbC1pdGVtIC5idXR0b24gaSB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcclxuICBsaW5lLWhlaWdodDogNDJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxufVxyXG4uc2VydmljZXMtc21hbGwtaXRlbSAuYnV0dG9uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zZXJ2aWNlcy1zbWFsbC1pdGVtOmhvdmVyICsgLml0ZW0tYmcge1xyXG4gIGJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLml0ZW0tYmcge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDJweCA0OHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufSIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuc2VjdGlvbiB7XG4gIGZpbHRlcjogYmx1cigpO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jZW50ZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uY2VudGVyLXRleHQuY29sb3JlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlcnZpY2VzLXNtYWxsLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpO1xuICBib3gtc2hhZG93OiAwIDJweCA0OHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbn1cblxuLnNlcnZpY2VzLXNtYWxsLWl0ZW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtLmFjdGl2ZTpiZWZvcmUsIC5zZXJ2aWNlcy1zbWFsbC1pdGVtOmhvdmVyOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtLmFjdGl2ZSAuaWNvbjpiZWZvcmUsIC5zZXJ2aWNlcy1zbWFsbC1pdGVtOmhvdmVyIC5pY29uOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDAuMjY7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtLmFjdGl2ZSAuaWNvbiBpLCAuc2VydmljZXMtc21hbGwtaXRlbTpob3ZlciAuaWNvbiBpIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDNkM2QzIDAlLCAjNTc2MDZmIDc0JSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtLmFjdGl2ZSAuc2VydmljZXMtdGl0bGUsIC5zZXJ2aWNlcy1zbWFsbC1pdGVtOmhvdmVyIC5zZXJ2aWNlcy10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VydmljZXMtc21hbGwtaXRlbS5hY3RpdmUgcCwgLnNlcnZpY2VzLXNtYWxsLWl0ZW06aG92ZXIgcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VydmljZXMtc21hbGwtaXRlbS5hY3RpdmUgLmJ1dHRvbiBpLCAuc2VydmljZXMtc21hbGwtaXRlbTpob3ZlciAuYnV0dG9uIGkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDNkM2QzIDAlLCAjNTc2MDZmIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtOmhvdmVyIHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtIC5pY29uIHtcbiAgd2lkdGg6IDEzOXB4O1xuICBoZWlnaHQ6IDExM3B4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLnNlcnZpY2VzLXNtYWxsLWl0ZW0gLmljb24gaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBsaW5lLWhlaWdodDogNjdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAxMnB4O1xuICB6LWluZGV4OiAyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtIC5zZXJ2aWNlcy10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtIHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODhweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtIC5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zZXJ2aWNlcy1zbWFsbC1pdGVtIC5idXR0b24gaSB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4uc2VydmljZXMtc21hbGwtaXRlbSAuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VydmljZXMtc21hbGwtaXRlbTpob3ZlciArIC5pdGVtLWJnIHtcbiAgYm90dG9tOiAzMHB4O1xufVxuXG4uaXRlbS1iZyB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDQ4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/branches/branches.component.ts":
  /*!************************************************!*\
    !*** ./src/app/branches/branches.component.ts ***!
    \************************************************/

  /*! exports provided: BranchesComponent */

  /***/
  function srcAppBranchesBranchesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchesComponent", function () {
      return BranchesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BranchesComponent = /*#__PURE__*/function () {
      function BranchesComponent(router) {
        _classCallCheck(this, BranchesComponent);

        this.router = router;
      }

      _createClass(BranchesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "students",
        value: function students(a) {
          this.router.navigate(['/students/', a]); //this.router.navigateByUrl('\students')
        }
      }]);

      return BranchesComponent;
    }();

    BranchesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BranchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-branches',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./branches.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/branches/branches.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./branches.component.scss */
      "./src/app/branches/branches.component.scss"))["default"]]
    })], BranchesComponent);
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/contactus/contactus.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactusContactusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  min-height: 100vh;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.page {\n  width: 100%;\n  height: auto;\n  background-color: floralwhite;\n  padding-bottom: 10px;\n}\n\nsection {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  background: white;\n}\n\nsection::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background: #fff;\n}\n\nsection .container {\n  position: relative;\n  min-width: 1100px;\n  min-height: 550px;\n  display: flex;\n  z-index: 1000;\n}\n\nsection .container .contactinfo {\n  position: absolute;\n  top: 40px;\n  width: 380px;\n  height: calc(100%-80px);\n  background-image: url(\"/assets/images/abstract.jpg\");\n  z-index: 1;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);\n}\n\nsection .container .contactinfo h2 {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n\nsection .container .contactinfo .info {\n  position: relative;\n  margin: 20px 0;\n}\n\nsection .container .contactinfo .info li {\n  position: relative;\n  list-style: none;\n  display: flex;\n  margin: 20px 0;\n  cursor: pointer;\n  align-items: flex-start;\n}\n\nsection .container .contactinfo .info li span:nth-child(1) {\n  width: 30px;\n  min-width: 30px;\n}\n\nsection .container .contactinfo .info li span:nth-child(1) i {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  max-width: 100%;\n  opacity: 0.5;\n}\n\nsection .container .contactinfo .info li span:nth-child(2) {\n  color: #fff;\n  margin-left: 10px;\n  font-weight: 700;\n  opacity: 0.3;\n}\n\nsection .container .contactinfo .info li:hover span:nth-child(1) i,\nsection .container .contactinfo .info li:hover span:nth-child(2) {\n  opacity: 1;\n}\n\nsection .container .contactinfo .sci {\n  position: relative;\n  display: flex;\n}\n\nsection .container .contactinfo .sci li {\n  list-style: none;\n  margin-right: 15px;\n}\n\nsection .container .contactinfo .sci li img {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  opacity: 0.5;\n  text-decoration: none;\n}\n\na {\n  color: white;\n  opacity: 0.7;\n}\n\na:hover {\n  opacity: 1;\n}\n\nsection .container .contactinfo .sci li:hover img {\n  opacity: 1;\n}\n\nsection .container .contactForm {\n  position: absolute;\n  padding: 70px 20px;\n  background: #fff;\n  margin-left: 150px;\n  padding-left: 250px;\n  width: calc(100%-150px);\n  height: 500px;\n  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);\n}\n\nsection .container .contactForm h2 {\n  color: black;\n  font-size: 24px;\n  font-weight: 500;\n}\n\nsection .container .contactForm .formBox {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding-top: 10px;\n}\n\nsection .container .contactForm .formBox .inputBox {\n  position: relative;\n  margin: 0 0 30px 0;\n}\n\nsection .container .contactForm .formBox .inputBox.w50 {\n  width: 47%;\n}\n\nsection .container .contactForm .formBox .inputBox.w100 {\n  width: 100%;\n}\n\nsection .container .contactForm .formBox .inputBox input,\nsection .container .contactForm .formBox .inputBox textarea {\n  width: 100% !important;\n  resize: none;\n  color: black;\n  font-size: 16px;\n  font-weight: 250;\n  border: none;\n  border-bottom: 1px solid #777;\n  padding: 2px 0;\n  outline: none;\n}\n\nsection .container .contactForm .formBox .inputBox textarea {\n  min-height: 80px;\n}\n\nsection .container .contactForm .formBox .inputBox span {\n  position: absolute;\n  left: 0;\n  color: black;\n  font-size: 16px;\n  font-weight: 300;\n  padding: 5px 0;\n  pointer-events: none;\n}\n\nsection .container .contactForm .formBox .inputBox input:focus ~ span,\nsection .container .contactForm .formBox .inputBox textarea:focus ~ span,\nsection .container .contactForm .formBox .inputBox input:valid ~ span,\nsection .container .contactForm .formBox .inputBox textarea:valid ~ span {\n  font-size: 12px;\n  font-weight: 400;\n  color: red;\n}\n\nsection .container .contactForm .formBox .inputBox input[type=submit] {\n  position: relative;\n  cursor: pointer;\n  background: black;\n  color: white;\n  font-weight: 800;\n  border: none;\n  max-width: 150px;\n  padding: 12px;\n}\n\nsection .container .contactForm .formBox .inputBox input[type=submit]:hover {\n  background: green;\n  color: white;\n}\n\n.cp-text {\n  color: rgba(0, 0, 0, 0.7);\n  text-shadow: 0 1px rgba(255, 255, 255, 0.1);\n  background: #777;\n  text-align: center;\n  padding: 5%;\n  height: 10px;\n}\n\n.invite {\n  background-color: #d8d87f;\n  width: 100%;\n  height: 180px;\n  margin-top: 10px;\n  color: black;\n  display: inline-block;\n  padding: 10px;\n  font-family: \"Times New Roman\", Times, serif;\n  margin-bottom: 0;\n}\n\n.text {\n  float: right;\n  padding: 2px;\n  width: 1190px;\n  height: 100px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL0U6XFxOZXcgZm9sZGVyXFxDb252b2NhdGlvbk1hbmFnZW1lbnRcXENvbnZvY2F0aW9uTWFuYWdlbWVudC9zcmNcXGFwcFxcY29udGFjdHVzXFxjb250YWN0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLDRDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBRUEsb0JBQUE7QUNDSjs7QURDRTtFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFFQSxZQUFBO0VBRUEsaUJBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUFrQixpQkFBQTtFQUNsQixhQUFBO0VBQ0EsYUFBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBRUEsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0RBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQUNGLDhCQUFBO0VBQ0EsMENBQUE7QUNIRjs7QURNRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0hKOztBREtFO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDRkY7O0FESUU7RUFFRSxXQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRElFO0VBRUUseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLRTs7RUFHRSxVQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNISjs7QURLRTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJRTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNERjs7QURHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0FDQUo7O0FERUU7RUFFRSxVQUFBO0FDQUo7O0FER0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0VBQ0EsMENBQUE7QUNETjs7QURHSTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFSTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUk7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxVQUFBO0FDRU47O0FEQUk7RUFDQSxXQUFBO0FDR0o7O0FEREk7O0VBSUUsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNELFlBQUE7RUFDQyw2QkFBQTtFQUNBLGNBQUE7RUFDRCxhQUFBO0FDRUw7O0FEQ0k7RUFDRSxnQkFBQTtBQ0VOOztBREFJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVDLGNBQUE7RUFDRCxvQkFBQTtBQ0VOOztBRENJOzs7O0VBTUUsZUFBQTtFQUNBLGdCQUFBO0VBRUEsVUFBQTtBQ0ROOztBRElJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFRixZQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDRk47O0FESUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNETjs7QURJQTtFQUFVLHlCQUFBO0VBQXVCLDJDQUFBO0VBQzdCLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW9CLFdBQUE7RUFDckMsWUFBQTtBQ0dKOztBRENBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBRUEsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLnBhZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ZmxvcmFsd2hpdGU7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuICBzZWN0aW9ue1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxMDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9CYW5uZXIyLmpwZWcpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICB9XHJcbiAgc2VjdGlvbjo6YmVmb3Jle1xyXG4gICAgY29udGVudDonJyA7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbiAgfVxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi13aWR0aDogMTEwMHB4O21pbi1oZWlnaHQ6IDU1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm97XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIC8vIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJS04MHB4KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJzdHJhY3QuanBnJyk7XHJcbiAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsMCwwLDAuMik7ICBcclxuICBcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyBoMntcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIFxyXG4gIH1cclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8gbGl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8gbGkgc3BhbjpudGgtY2hpbGQoMSlcclxuICB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuaW5mbyBsaSBzcGFuOm50aC1jaGlsZCgxKSBpXHJcbiAge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIFxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8gbGkgc3BhbjpudGgtY2hpbGQoMilcclxuICB7IGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIFxyXG4gIH1cclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZvIGxpOmhvdmVyIHNwYW46bnRoLWNoaWxkKDEpIGksXHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuaW5mbyBsaTpob3ZlciBzcGFuOm50aC1jaGlsZCgyKVxyXG4gIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuc2Npe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuc2NpIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuc2NpIGxpIGltZ3tcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgXHJcbiAgfVxyXG4gIGE6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5zY2kgbGk6aG92ZXIgIGltZ3tcclxuICAgIFxyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICBcclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm17XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcGFkZGluZzogNzBweCAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUtMTUwcHgpO1xyXG4gICAgICAvL2JvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDUwcHggNTBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIGgye1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC8vYm9yZGVyLXN0eWxlOmdyb292ZSA7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCAwIDMwcHggMDtcclxuICAgIH1cclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94Lnc1MHtcclxuICAgICAgd2lkdGg6IDQ3JTtcclxuICAgIH1cclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94LncxMDB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0LFxyXG4gICAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggdGV4dGFyZWF7XHJcbiAgICAgIFxyXG4gICAgICAvLyBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJSAgIWltcG9ydGFudDtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDI1MDtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzc3O1xyXG4gICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhe1xyXG4gICAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggc3BhbntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIFxyXG4gICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0OmZvY3VzIH4gc3BhbixcclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhOmZvY3VzIH4gc3BhbixcclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0OnZhbGlkIH4gc3BhbixcclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhOnZhbGlkIH4gc3BhblxyXG4gICAgeyBcclxuICAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgXHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICBcclxuICAgIH1cclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIH1cclxuICAgIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuLmNwLXRleHR7IGNvbG9yOiByZ2JhKDAsMCwwLC43KTsgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJhY2tncm91bmQ6Izc3NzsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOjUlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgXHJcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmludml0ZXtcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDhiLCAjMjkxYjliLCAjNDEzMGFjLCAjNTY0NWJkLCAjNmE1YWNkKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMTI3KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi50ZXh0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIHdpZHRoOiAxMTkwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsImJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLnBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbnNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5zZWN0aW9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTEwMHB4O1xuICBtaW4taGVpZ2h0OiA1NTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHB4O1xuICB3aWR0aDogMzgwcHg7XG4gIGhlaWdodDogY2FsYygxMDAlLTgwcHgpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hYnN0cmFjdC5qcGdcIik7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIGgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZvIGxpIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuaW5mbyBsaSBzcGFuOm50aC1jaGlsZCgxKSBpIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZvIGxpIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8gbGk6aG92ZXIgc3BhbjpudGgtY2hpbGQoMSkgaSxcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8gbGk6aG92ZXIgc3BhbjpudGgtY2hpbGQoMikge1xuICBvcGFjaXR5OiAxO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5zY2kge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLnNjaSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuc2NpIGxpIGltZyB7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG5hOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuc2NpIGxpOmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDcwcHggMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xuICB3aWR0aDogY2FsYygxMDAlLTE1MHB4KTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm94LXNoYWRvdzogMCA1MHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIGgyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDMwcHggMDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gudzUwIHtcbiAgd2lkdGg6IDQ3JTtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gudzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCBpbnB1dCxcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcmVzaXplOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDI1MDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc3NztcbiAgcGFkZGluZzogMnB4IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogODBweDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggaW5wdXQ6Zm9jdXMgfiBzcGFuLFxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggdGV4dGFyZWE6Zm9jdXMgfiBzcGFuLFxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggaW5wdXQ6dmFsaWQgfiBzcGFuLFxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggdGV4dGFyZWE6dmFsaWQgfiBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmVkO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3AtdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLmludml0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4N2Y7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRleHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDExOTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/contactus/contactus.component.ts ***!
    \**************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! SweetAlert */
    "./node_modules/SweetAlert/dist/sweetalert.min.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(SweetAlert__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../member.service */
    "./src/app/member.service.ts");

    var ContactusComponent = /*#__PURE__*/function () {
      function ContactusComponent(as, member) {
        _classCallCheck(this, ContactusComponent);

        this.as = as;
        this.member = member;
      }

      _createClass(ContactusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addContact",
        value: function addContact(formData) {
          console.log(formData);
          this.member.addContactForm(formData.value);
          formData.resetForm();
          SweetAlert__WEBPACK_IMPORTED_MODULE_2___default()({
            title: "Thank you for sharing your message with us!",
            // text: "Thank you for sharing your message with us!",
            icon: "success"
          });
        }
      }]);

      return ContactusComponent;
    }();

    ContactusComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]
      }];
    };

    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactus.component.scss */
      "./src/app/contactus/contactus.component.scss"))["default"]]
    })], ContactusComponent);
    /***/
  },

  /***/
  "./src/app/display/display.component.scss":
  /*!************************************************!*\
    !*** ./src/app/display/display.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDisplayDisplayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  text-transform: uppercase;\n  color: black;\n  font-weight: 600;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\nbody {\n  background-color: floralwhite;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\nbutton {\n  background: black;\n  border: none;\n  margin: auto;\n  color: white;\n  font-weight: 400;\n  padding: 8px 20px;\n  border-radius: 10px;\n  font-size: 1em;\n  font-family: sans-serif;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9FOlxcTmV3IGZvbGRlclxcQ29udm9jYXRpb25NYW5hZ2VtZW50XFxDb252b2NhdGlvbk1hbmFnZW1lbnQvc3JjXFxhcHBcXGRpc3BsYXlcXGRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0FKOztBREdBO0VBQ0ksNkJBQUE7RUFDQSw0Q0FBQTtBQ0FKOztBREdDO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0YsWUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQUw7O0FERUM7RUFDSSxpQkFBQTtBQ0NMIiwiZmlsZSI6InNyYy9hcHAvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuIGJ1dHRvbiB7XHJcbiAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICBmb250LWZhbWlseTogIHNhbnMtc2VyaWY7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gfVxyXG4gYnV0dG9uOmhvdmVye1xyXG4gICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gfVxyXG4gXHJcbiIsImgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/display/display.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/display/display.component.ts ***!
    \**********************************************/

  /*! exports provided: DisplayComponent */

  /***/
  function srcAppDisplayDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayComponent", function () {
      return DisplayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../member.service */
    "./src/app/member.service.ts");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.es.min.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__); // import *from 'jspdf';  


    var DisplayComponent = /*#__PURE__*/function () {
      function DisplayComponent(member, router) {
        _classCallCheck(this, DisplayComponent);

        this.member = member;
        this.router = router;
        this.Name = this.member.rname;
        this.Branch = this.member.rbranch;
        this.Email = this.member.reid;
        this.Phone = this.member.rphn;
        this.Rgno = this.member.rguestno;
        this.Bookedseats = this.member.bookedseats;
      }

      _createClass(DisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "download",
        value: function download() {
          var data = document.getElementById('seatpdf');
          html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(data).then(function (canvas) {
            // Few necessary setting options  
            var imgWidth = 208; // var pageHeight = 295;    

            var imgHeight = canvas.height * imgWidth / canvas.width; // var heightLeft = imgHeight;  

            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]('p', 'mm', 'a4'); // A4 size page of PDF  

            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight + 15); //pdf.addImage(contentDataURL, 'PNG', 0, position, 208, 500)  

            pdf.save('image.pdf'); // Generated PDF   
          });
        }
      }, {
        key: "registernew",
        value: function registernew() {
          this.member.available = false;
          this.router.navigateByUrl('/register');
        }
      }]);

      return DisplayComponent;
    }();

    DisplayComponent.ctorParameters = function () {
      return [{
        type: _member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-display',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./display.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/display/display.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./display.component.scss */
      "./src/app/display/display.component.scss"))["default"]]
    })], DisplayComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/graduates/graduates.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/graduates/graduates.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGraduatesGraduatesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  display: flexbox;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: auto;\n  min-height: 100vh;\n  padding: 4rem 0;\n  background-color: white;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\nselect {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  margin-left: 450px;\n  width: 50%;\n  margin-top: 20px;\n  background-color: #e8eeef;\n  color: #3c474e;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 20px;\n  font-family: \"Times New Roman\", Times, serif;\n  display: inline-flex;\n}\n\n.buttonk {\n  margin-top: 10px;\n  color: black;\n  background: #f7f768;\n  font-size: 20px;\n  margin-left: 60px;\n  align-self: center;\n  text-align: center;\n  font-style: normal;\n  height: 45px;\n  width: 85px;\n  font-family: \"Times New Roman\", Times, serif;\n  border: black;\n  border-radius: 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n}\n\n.buttonk:hover {\n  cursor: pointer;\n  background: #39c239;\n  color: black;\n}\n\ntable {\n  border-collapse: collapse;\n  align-items: center;\n  margin-left: 115px;\n  margin-right: 30px;\n  padding: 10px;\n  border-radius: 0.7rem;\n  max-width: 80rem;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n  color: black;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2d7;\n}\n\nth {\n  background-color: black;\n  color: white;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhZHVhdGVzL0U6XFxOZXcgZm9sZGVyXFxDb252b2NhdGlvbk1hbmFnZW1lbnRcXENvbnZvY2F0aW9uTWFuYWdlbWVudC9zcmNcXGFwcFxcZ3JhZHVhdGVzXFxncmFkdWF0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyYWR1YXRlcy9ncmFkdWF0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNDLG1CQUFBO0VBQ0QsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7QUNESjs7QURNQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0EsZ0JBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0YsYUFBQTtFQUNBLGtCQUFBO0VBQ0UsbURBQUE7QUNIRjs7QURLQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBRUMsZ0JBQUE7QUNITDs7QURNRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNISjs7QURNRTtFQUFtQiwyQkFBQTtBQ0ZyQjs7QURJRTtFQUVDLHVCQUFBO0VBQ0MsWUFBQTtBQ0ZKOztBRElFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZ3JhZHVhdGVzL2dyYWR1YXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIGRpc3BsYXk6ZmxleGJveDtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDRyZW0gMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICB9XHJcblxyXG4gXHJcblxyXG5zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0NTBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWVlZjtcclxuICBjb2xvcjogIzNjNDc0ZTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwwLDAsMC4wMykgaW5zZXQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLmJ1dHRvbmsge1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAyNDcsIDEwNCk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogODVweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuYm9yZGVyOiBibGFjaztcclxuYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSBpbnNldDtcclxufVxyXG4uYnV0dG9uazpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6cmdiKDU3LCAxOTQsIDU3KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIC8vIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDAuN3JlbTtcclxuICAgXHJcbiAgICAgbWF4LXdpZHRoOiA4MHJlbTtcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyZDd9XHJcbiAgXHJcbiAgdGgge1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMiwgMTIsIDAuNDI1KTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gICIsImJvZHkge1xuICBkaXNwbGF5OiBmbGV4Ym94O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogNDUwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XG4gIGNvbG9yOiAjM2M0NzRlO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wMykgaW5zZXQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uYnV0dG9uayB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogI2Y3Zjc2ODtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogODVweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYm9yZGVyOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG59XG5cbi5idXR0b25rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzljMjM5O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDExNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbiAgbWF4LXdpZHRoOiA4MHJlbTtcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjJkNztcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/graduates/graduates.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/graduates/graduates.component.ts ***!
    \**************************************************/

  /*! exports provided: GraduatesComponent */

  /***/
  function srcAppGraduatesGraduatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraduatesComponent", function () {
      return GraduatesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../member.service */
    "./src/app/member.service.ts");

    var GraduatesComponent = /*#__PURE__*/function () {
      function GraduatesComponent(memberService) {
        _classCallCheck(this, GraduatesComponent);

        this.memberService = memberService;
        this.isclicked = false;
      }

      _createClass(GraduatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchStudent",
        value: function searchStudent(formData) {
          console.log(formData);
          this.isclicked = true;
          console.log(this.isclicked);
          this.memberService.getAppMembers(formData.value.branch);
        }
      }]);

      return GraduatesComponent;
    }();

    GraduatesComponent.ctorParameters = function () {
      return [{
        type: _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
      }];
    };

    GraduatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-graduates',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./graduates.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/graduates/graduates.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./graduates.component.scss */
      "./src/app/graduates/graduates.component.scss"))["default"]]
    })], GraduatesComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  min-height: 1550px;\n  overflow-y: hidden;\n  font-family: \"Times New Roman\", Times, serif;\n  background-color: floralwhite;\n}\n\n.page {\n  width: 100%;\n  background-color: floralwhite;\n  padding-bottom: 10px;\n}\n\n.headerpart {\n  width: 100%;\n  height: 140px;\n  background-color: darkblue;\n  background-image: url(\"/assets/logo-mpuat1.png\");\n  background-repeat: no-repeat;\n}\n\n.navbar {\n  overflow: hidden;\n  background-image: url(\"/assets/images/abstract.jpg\");\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n/* Links inside the navbar */\n\n.navbar a {\n  float: left;\n  font-size: 16px;\n  color: #FFF;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n/* The dropdown container */\n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n\n.dropbtn {\n  color: white;\n  box-shadow: 2px 2px 10px black;\n}\n\n/* Dropdown button */\n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  /* Important for vertical align on mobile phones */\n  margin: 0;\n  /* Important for vertical align on mobile phones */\n}\n\n/* Add a red background color to navbar links on hover */\n\n.navbar a:hover, .dropdown:hover .dropbtn {\n  background-color: #f5eeee;\n  color: black;\n  box-shadow: 2px 2px 10px black;\n}\n\n/* Dropdown content (hidden by default) */\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropbtn:hover {\n  box-shadow: 2px 10px black;\n}\n\n/* Links inside the dropdown */\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n/* Add a grey background color to dropdown links on hover */\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\n/* Show the dropdown menu on hover */\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.bodypart {\n  width: 100%;\n  height: 600px;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.bodypart .imgpart {\n  width: 780px;\n  height: 445px;\n  border-style: groove;\n  display: inline-block;\n}\n\n.imgpart:hover {\n  box-shadow: 4px 4px 12px black;\n}\n\n.bodypart .events h1 {\n  color: green;\n}\n\n.bodypart .events {\n  width: 520px;\n  height: 445px;\n  border-style: groove;\n  float: right;\n}\n\n.bodypart .events .news {\n  width: 510px;\n  height: 200px;\n  padding: 5px;\n  float: right;\n}\n\n.bodypart .events .news .newsinfo {\n  width: 500px;\n  height: 200px;\n  padding: 5px;\n  float: right;\n}\n\n.bodypart .events .news .newsinfo h1 {\n  text-align: center;\n}\n\n.bodypart .events .news .newsinfo h3 {\n  text-align: center;\n}\n\n.cards {\n  width: 25%;\n  height: 345px;\n  background: linear-gradient(147deg, #000000 0%, #2c3e50 74%);\n  border-radius: 5px;\n  margin: 5px;\n  margin-left: 50px;\n  margin-right: 50px;\n  box-shadow: 2px 2px 10px black;\n  display: inline-block;\n}\n\n.cards:hover {\n  box-shadow: 4px 4px 12px black;\n}\n\n.image img {\n  width: 100%;\n  height: 220px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n.title {\n  text-align: center;\n}\n\n.guest {\n  width: 1310px;\n  border-style: groove;\n  margin-top: 50px;\n  margin-left: 20px;\n  padding-bottom: 20px;\n}\n\n.invite {\n  background: linear-gradient(147deg, #000000 0%, #2c3e50 74%);\n  width: 1310px;\n  height: 350px;\n  margin: auto;\n  margin-top: 50px;\n  border-style: groove;\n  color: white;\n}\n\n.invite .h2 {\n  text-align: center;\n}\n\n.text {\n  background-color: #d8d87f;\n  padding: 10px;\n  border-style: groove;\n  margin: 50px;\n  margin-top: 20px;\n  height: 240px;\n  color: black;\n}\n\nh6:hover {\n  color: white;\n}\n\nh5:hover {\n  color: white;\n}\n\n.cg:hover {\n  box-shadow: 4px 4px 12px black;\n}\n\n.cp-text {\n  color: rgba(0, 0, 0, 0.7);\n  text-shadow: 0 1px rgba(255, 255, 255, 0.1);\n  background: #777;\n  text-align: center;\n  padding: 5%;\n  height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcTmV3IGZvbGRlclxcQ29udm9jYXRpb25NYW5hZ2VtZW50XFxDb252b2NhdGlvbk1hbmFnZW1lbnQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBRUEsNkJBQUE7RUFFQSxvQkFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0VBR0Esb0RBQUE7RUFDQSw0Q0FBQTtBQ0RKOztBRElFLDRCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDREo7O0FESUUsMkJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtBQ0RKOztBREdFLG9CQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQXNCLGtEQUFBO0VBQ3RCLFNBQUE7RUFBVyxrREFBQTtBQ0NmOztBREdFLHdEQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURJRSx5Q0FBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUNESjs7QURHRTtFQUNFLDBCQUFBO0FDQUo7O0FERUUsOEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRSwyREFBQTs7QUFDQTtFQUNFLHNCQUFBO0FDQ0o7O0FER0Usb0NBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7RUFDRixnQkFBQTtBQ0RGOztBRElBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDREo7O0FER0E7RUFDSSw4QkFBQTtBQ0FKOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBRElBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNESjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUNESjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUNESjs7QURHQTtFQUVBLGtCQUFBO0FDREE7O0FERUE7RUFFSSxrQkFBQTtBQ0FKOztBREVJO0VBRUksVUFBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtFQVFBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUVBLHFCQUFBO0FDUlI7O0FEVUk7RUFFSSw4QkFBQTtBQ1JSOztBRFdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDUlI7O0FEV0k7RUFFSSxrQkFBQTtBQ1RSOztBRGFLO0VBQ0UsYUFBQTtFQUNFLG9CQUFBO0VBQ0YsZ0JBQUE7RUFDQSxpQkFBQTtFQUVGLG9CQUFBO0FDWEw7O0FEYUE7RUFDRSw0REFBQTtFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0E7RUFDSSxrQkFBQTtBQ1hKOztBRGFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ1ZKOztBRGFBO0VBQ0UsWUFBQTtBQ1ZGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBRFlBO0VBQ0ksOEJBQUE7QUNUSjs7QURXQTtFQUFVLHlCQUFBO0VBQXVCLDJDQUFBO0VBQzdCLGdCQUFBO0VBQWlCLGtCQUFBO0VBQW9CLFdBQUE7RUFDckMsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1pbi1oZWlnaHQ6IDE1NTBweDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpmbG9yYWx3aGl0ZTtcclxufVxyXG4ucGFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpmbG9yYWx3aGl0ZTtcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uaGVhZGVycGFydHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9sb2dvLW1wdWF0MS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwOGIsICMyOTFiOWIsICM0MTMwYWMsICM1NjQ1YmQsICM2YTVhY2QpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYnN0cmFjdC5qcGcnKTtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXHJcbiAgLm5hdmJhciBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cclxuICAuZHJvcGRvd24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGJ0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxufVxyXG4gIC8qIERyb3Bkb3duIGJ1dHRvbiAqL1xyXG4gIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLy8gY29sb3I6IHJnYigxNCwgMSwgMSk7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjM4LCAyMzgpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5kcm9wYnRuOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogIDJweCAxMHB4IGJsYWNrO1xyXG4gIH1cclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4uYm9keXBhcnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5ib2R5cGFydCAuaW1ncGFydHtcclxuICAgIHdpZHRoOiA3ODBweDtcclxuICAgIGhlaWdodDogNDQ1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uaW1ncGFydDpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTJweCBibGFjaztcclxufVxyXG5cclxuLmJvZHlwYXJ0IC5ldmVudHMgaDF7XHJcbiAgY29sb3I6Z3JlZW47XHJcbiAgXHJcbn1cclxuXHJcbi5ib2R5cGFydCAuZXZlbnRzIHtcclxuICAgIHdpZHRoOiA1MjBweDtcclxuICAgIGhlaWdodDogNDQ1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uYm9keXBhcnQgLmV2ZW50cyAubmV3cyB7XHJcbiAgICB3aWR0aDogNTEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIGZsb2F0OiByaWdodDsgICBcclxufVxyXG4uYm9keXBhcnQgLmV2ZW50cyAubmV3cyAubmV3c2luZm97XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIGZsb2F0OiByaWdodDsgICBcclxufVxyXG4uYm9keXBhcnQgLmV2ZW50cyAubmV3cyAubmV3c2luZm8gaDF7XHJcblxyXG50ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uYm9keXBhcnQgLmV2ZW50cyAubmV3cyAubmV3c2luZm8gaDN7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO31cclxuICAgIFxyXG4gICAgLmNhcmRzXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKTs7XHJcbiAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwOGIsICMyOTFiOWIsICM0MTMwYWMsICM1NjQ1YmQsICM2YTVhY2QpO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxZmQxZjk7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzYwZGZjZDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg5YjllO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwYmVlZjk7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzk2YzhmYjtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXJnaW46NXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbiAgICBcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY2FyZHM6aG92ZXJcclxuICAgIHtcclxuICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDEycHggYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWFnZSBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpdGxlXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAgLmd1ZXN0XHJcbiAgICAgeyB3aWR0aDogMTMxMHB4O1xyXG4gICAgICAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgICAgIG1hcmdpbi10b3A6IDUwcHg7IFxyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7IFxyXG4gICAgLy8gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICB9XHJcbi5pbnZpdGV7XHJcbiAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSk7XHJcbiAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDA4YiwgIzI5MWI5YiwgIzQxMzBhYywgIzU2NDViZCwgIzZhNWFjZCk7XHJcbiAgICB3aWR0aDogMTMxMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW52aXRlIC5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMTI3KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5oNjpob3ZlcntcclxuICBjb2xvcjp3aGl0ZVxyXG59XHJcbmg1OmhvdmVye1xyXG4gIGNvbG9yOndoaXRlXHJcbn1cclxuXHJcbi5jZzpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTJweCBibGFjaztcclxufVxyXG4uY3AtdGV4dHsgY29sb3I6IHJnYmEoMCwwLDAsLjcpOyB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZDojNzc3OyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6NSU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iLCJib2R5IHtcbiAgbWluLWhlaWdodDogMTU1MHB4O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xufVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5oZWFkZXJwYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2xvZ28tbXB1YXQxLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm5hdmJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Fic3RyYWN0LmpwZ1wiKTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXG4uZHJvcGRvd24ge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRyb3BidG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbn1cblxuLyogRHJvcGRvd24gYnV0dG9uICovXG4uZHJvcGRvd24gLmRyb3BidG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG4gIG1hcmdpbjogMDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG59XG5cbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlZWVlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbn1cblxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDEwcHggYmxhY2s7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBmbG9hdDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYm9keXBhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYm9keXBhcnQgLmltZ3BhcnQge1xuICB3aWR0aDogNzgwcHg7XG4gIGhlaWdodDogNDQ1cHg7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pbWdwYXJ0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMnB4IGJsYWNrO1xufVxuXG4uYm9keXBhcnQgLmV2ZW50cyBoMSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmJvZHlwYXJ0IC5ldmVudHMge1xuICB3aWR0aDogNTIwcHg7XG4gIGhlaWdodDogNDQ1cHg7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ib2R5cGFydCAuZXZlbnRzIC5uZXdzIHtcbiAgd2lkdGg6IDUxMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJvZHlwYXJ0IC5ldmVudHMgLm5ld3MgLm5ld3NpbmZvIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJvZHlwYXJ0IC5ldmVudHMgLm5ld3MgLm5ld3NpbmZvIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9keXBhcnQgLmV2ZW50cyAubmV3cyAubmV3c2luZm8gaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkcyB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMzQ1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jYXJkczpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTJweCBibGFjaztcbn1cblxuLmltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmd1ZXN0IHtcbiAgd2lkdGg6IDEzMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmludml0ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKTtcbiAgd2lkdGg6IDEzMTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBib3JkZXItc3R5bGU6IGdyb292ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW52aXRlIC5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkODdmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItc3R5bGU6IGdyb292ZTtcbiAgbWFyZ2luOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDI0MHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmg2OmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oNTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNnOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMnB4IGJsYWNrO1xufVxuXG4uY3AtdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHRleHQtc2hhZG93OiAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG4gIGhlaWdodDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/member.service.ts":
  /*!***********************************!*\
    !*** ./src/app/member.service.ts ***!
    \***********************************/

  /*! exports provided: MemberService */

  /***/
  function srcAppMemberServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberService", function () {
      return MemberService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! SweetAlert */
    "./node_modules/SweetAlert/dist/sweetalert.min.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(SweetAlert__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);

    var MemberService = /*#__PURE__*/function () {
      function MemberService(db, router) {
        _classCallCheck(this, MemberService);

        this.db = db;
        this.router = router;
        this.object = {
          enroll: '',
          name: '',
          mname: '',
          fname: '',
          branch: '',
          email: '',
          phone: 0,
          address: '',
          guestno: 0,
          guestnames: ''
        };
        this.sdata = [];
        this.result = [];
        this.eligible = [];
        this.seats = [];
        this.eligibility = "";
        this.available = false;
        this.seat = [];
        this.students = [];
        this.resu = [];
        this.bookedseats = [];
      }

      _createClass(MemberService, [{
        key: "addData",
        value: function addData(member) {
          //let i=0,j=1,c=0
          var tempMember = member;
          tempMember.name = member.name;
          tempMember.mname = member.mname;
          tempMember.fname = member.fname;
          tempMember.branch = member.branch;
          tempMember.email = member.email;
          tempMember.phone = member.phone;
          tempMember.address = member.address;
          tempMember.guestno = member.guestno;
          tempMember.guestnames = member.guestnames;
          this.rname = member.name;
          this.rbranch = member.branch;
          this.reid = member.email;
          this.rphn = member.phone;
          this.guestno = member.guestno;
          this.rguestno = member.guestno;
          this.db.collection("registration").add(tempMember); // this.getSeat();
        }
      }, {
        key: "addSeats",
        value: function addSeats(Name, Branch, Email, seats) {
          var tempSeat = {
            Name: "",
            Branch: "",
            Email: "",
            seats: []
          };
          tempSeat.Name = Name;
          tempSeat.Branch = Branch;
          tempSeat.Email = Email;
          tempSeat.seats = seats;
          this.bookedseats = seats;
          this.db.collection("Seats").add(tempSeat); // alert("Distributor Successfully Added.")
        }
      }, {
        key: "seatData",
        value: function seatData(k) {
          var washingtonRef = this.db.collection("SeatArray").doc("Sarray"); // Atomically add a new region to the "regions" array field.

          washingtonRef.update({
            regions: firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(k)
          });
        }
      }, {
        key: "deleteData",
        value: function deleteData(member) {
          this.db.collection("seats").doc(member)["delete"]();
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(studentid) {
          this.db.collection("eligibilityCriteria").doc(studentid)["delete"]();
        }
      }, {
        key: "getEligibility",
        value: function getEligibility(member) {
          var _this3 = this;

          var promise = new Promise(function (resolve, reject) {
            _this3.db.collection("eligibilityCriteria", function (ref) {
              return ref.where('Branch', '==', member.branchS).where('Name', '==', member.nameS).where('EnrollmentNo', '==', member.enrollS);
            }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            })).subscribe(function (res) {
              //  console.log(res)
              _this3.eligible = res;

              if (!_this3.eligible[0]) {
                alert("Wrong info");
              } else {
                _this3.eligibility = _this3.eligible[0].eligibility;

                if (_this3.eligibility == "Eligible") {
                  _this3.available = true;
                  SweetAlert__WEBPACK_IMPORTED_MODULE_5___default()({
                    text: "You are eligible!",
                    icon: "success"
                  });
                } else {
                  SweetAlert__WEBPACK_IMPORTED_MODULE_5___default()({
                    text: "You are not eligible!",
                    icon: "error"
                  });
                }
              }
            });
          });
          return promise;
        } // getSeat(){
        //   let c;
        //   this.db.collection("seats",ref=>ref.orderBy('seatno','asc'))
        //   .snapshotChanges().pipe(
        //     map(actions => actions.map(a => {
        //       const data = a.payload.doc.data() as any;
        //       const id = a.payload.doc.id;
        //       return { id, ...data };
        //     }))
        //   ).subscribe(res=>{
        //     this.seats=res
        //     for(c=0;c<=this.guestno;c++)
        //     {
        //       this.seat[c]=this.seats[c].seatno;
        //       //console.log(this.seats[c])
        //       //this.deleteData(this.seats[c].id);
        //     }
        //     //console.log(this.seat)
        //     this.available=false;
        //     swal({
        //       title: "Registered Successfully!",
        //       text: "You are now welcome to the convocation!\n Your seat numbers are :- " + this.seat,
        //       icon: "success",
        //     });
        //     for(c=0;c<=this.guestno;c++)
        //     {
        //       console.log(this.seats[c])
        //       this.deleteData(this.seats[c].id);
        //     }
        //   })
        // }

      }, {
        key: "getMemberById",
        value: function getMemberById(id) {
          return this.db.collection("registration").doc(id).valueChanges();
        }
      }, {
        key: "getAppMembers",
        value: function getAppMembers(branch) {
          var _this4 = this;

          this.db.collection("eligibilityCriteria", function (ref) {
            return ref.where('Branch', '==', branch).where('eligibility', '==', "Eligible");
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            _this4.result1 = res;
            console.log(res);
          });
        }
      }, {
        key: "getPreviousStudents",
        value: function getPreviousStudents(branch, year) {
          var _this5 = this;

          this.db.collection("StudentData", function (ref) {
            return ref.where('Branch', '==', branch).where('YearOfGrad', '==', year);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            _this5.resu = res;
            console.log(_this5.resu);
          });
        }
      }, {
        key: "getstudents",
        value: function getstudents() {
          var _this6 = this;

          this.db.collection("StudentData").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            //  console.log(res)
            _this6.students = res;
            console.log(_this6.students);
          });
        }
      }, {
        key: "getschedule",
        value: function getschedule() {
          var _this7 = this;

          /*console.log(this.auth.loggedinuserid)*/
          this.db.collection("schedule").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            _this7.result = res;
            console.log(_this7.result);
          });
        }
      }, {
        key: "getseats",
        value: function getseats() {
          var _this8 = this;

          /*console.log(this.auth.loggedinuserid)*/
          this.db.collection("SeatArray").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            _this8.sdata = res;
            console.log(_this8.sdata);
          });
        }
      }, {
        key: "addStudent",
        value: function addStudent(member) {
          var tempStudent = member;
          tempStudent.Name = member.Name;
          tempStudent.Branch = member.Branch;
          tempStudent.eligibility = member.eligibility;
          tempStudent.EnrollmentNo = member.EnrollmentNo;
          tempStudent.YearOfGrad = member.YearOfGrad;
          this.db.collection("eligibilityCriteria").add(tempStudent);
          SweetAlert__WEBPACK_IMPORTED_MODULE_5___default()({
            title: "Student Registered Successfully",
            icon: "success"
          });
        }
      }, {
        key: "addStudentdata",
        value: function addStudentdata(member) {
          var tempStudent = member;
          tempStudent.Name = member.Name;
          tempStudent.Branch = member.Branch;
          tempStudent.eligibility = member.eligibility;
          tempStudent.EnrollmentNo = member.EnrollmentNo;
          tempStudent.YearOfGrad = member.YearOfGrad;
          this.db.collection("StudentData").add(tempStudent); //alert("Student Successfully Added.")
        }
      }, {
        key: "addContactForm",
        value: function addContactForm(member) {
          var tempStudent = member;
          tempStudent.FirstName = member.FirstName;
          tempStudent.LastName = member.LastName;
          tempStudent.Message = member.Message;
          tempStudent.Email = member.Email;
          tempStudent.Contact = member.Contact;
          this.db.collection("ContactForm").add(tempStudent); // alert("Distributor Successfully Added.")
        }
      }]);

      return MemberService;
    }();

    MemberService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    MemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MemberService);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.btn {\n  background-color: #000000;\n  background-image: linear-gradient(315deg, #000000 0%, #7f8c8d 74%);\n  border: black;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.btn:hover {\n  background-color: #d3d3d3;\n  background-image: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);\n  font-weight: 700;\n  border: black;\n  color: black;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.form-control {\n  border-top: white;\n  border-left: white;\n  border-right: white;\n}\n\n.navbar {\n  overflow: hidden;\n  background-image: url(\"/assets/images/abstract.jpg\");\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 30px;\n}\n\n/* Links inside the navbar */\n\n.navbar a {\n  float: left;\n  font-size: 20px;\n  color: #FFF;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n/* The dropdown container */\n\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n\n.dropbtn {\n  color: white;\n  box-shadow: 2px 2px 10px black;\n}\n\n/* Dropdown button */\n\n.dropdown .dropbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  /* Important for vertical align on mobile phones */\n  margin: 0;\n  /* Important for vertical align on mobile phones */\n}\n\n/* Add a red background color to navbar links on hover */\n\n.navbar a:hover, .dropdown:hover .dropbtn {\n  background-color: #f5eeee;\n  color: black;\n  box-shadow: 2px 2px 10px black;\n}\n\n/* Dropdown content (hidden by default) */\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropbtn:hover {\n  box-shadow: 2px 10px black;\n}\n\n/* Links inside the dropdown */\n\n.dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n/* Add a grey background color to dropdown links on hover */\n\n.dropdown-content a:hover {\n  background-color: #ddd;\n}\n\n/* Show the dropdown menu on hover */\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.page {\n  width: 100%;\n  height: auto;\n  background-color: floralwhite;\n  padding-bottom: 10px;\n}\n\n.headerpart {\n  width: 100%;\n  height: 140px;\n  background-color: black;\n  background-image: url(\"/assets/images/logo-mpuat1.png\");\n  background-repeat: no-repeat;\n}\n\n.admin {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0U6XFxOZXcgZm9sZGVyXFxDb252b2NhdGlvbk1hbmFnZW1lbnRcXENvbnZvY2F0aW9uTWFuYWdlbWVudC9zcmNcXGFwcFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNDQTs7QURDQTtFQUdBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUNBQTs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esa0VBQUE7RUFDSixnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUNDQTs7QURDQTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0UsZ0JBQUE7RUFFQSxvREFBQTtFQUVBLDRDQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBLDRCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDREY7O0FESUEsMkJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtBQ0RGOztBREdBLG9CQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQXNCLGtEQUFBO0VBQ3RCLFNBQUE7RUFBVyxrREFBQTtBQ0NiOztBREdBLHdEQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURJQSx5Q0FBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUNERjs7QURHQTtFQUNFLDBCQUFBO0FDQUY7O0FERUEsOEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQSwyREFBQTs7QUFDQTtFQUNFLHNCQUFBO0FDQ0Y7O0FER0Esb0NBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBRUEsb0JBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFDQSx1REFBQTtFQUNBLDRCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luOmhvdmVye1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5idG57XHJcblxyXG5cclxuYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzAwMDAwMCAwJSwgIzdmOGM4ZCA3NCUpO1xyXG5ib3JkZXI6IGJsYWNrO1xyXG5mb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkM2QzZDMgMCUsICM1NzYwNmYgNzQlKTtcclxuZm9udC13ZWlnaHQ6IDcwMDsgICAgXHJcbmJvcmRlcjogYmxhY2s7XHJcbmNvbG9yOiBibGFjaztcclxuZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIFxyXG4gICAgYm9yZGVyLXRvcDogd2hpdGU7XHJcbiAgICBib3JkZXItbGVmdDogd2hpdGU7XHJcbiAgICBib3JkZXItcmlnaHQ6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJzdHJhY3QuanBnJyk7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDhiLCAjMjkxYjliLCAjNDEzMGFjLCAjNTY0NWJkLCAjNmE1YWNkKTtcclxuICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTozMHB4XHJcbn1cclxuXHJcbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXHJcbi5uYXZiYXIgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXHJcbi5kcm9wZG93biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmRyb3BidG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxufVxyXG4vKiBEcm9wZG93biBidXR0b24gKi9cclxuLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgLy8gY29sb3I6IHJnYigxNCwgMSwgMSk7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG4gIG1hcmdpbjogMDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbn1cclxuXHJcblxyXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cclxuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzOCwgMjM4KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uZHJvcGJ0bjpob3ZlcntcclxuICBib3gtc2hhZG93OiAgMnB4IDEwcHggYmxhY2s7XHJcbn1cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuIFxyXG59XHJcblxyXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnBhZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ZmxvcmFsd2hpdGU7XHJcbiAgLy9ib3JkZXItc3R5bGU6IGdyb292ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uaGVhZGVycGFydHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIC8vYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9sb2dvLW1wdWF0MS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYWRtaW57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi5sb2dpbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMDAwMDAwIDAlLCAjN2Y4YzhkIDc0JSk7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDNkM2QzIDAlLCAjNTc2MDZmIDc0JSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci10b3A6IHdoaXRlO1xuICBib3JkZXItbGVmdDogd2hpdGU7XG4gIGJvcmRlci1yaWdodDogd2hpdGU7XG59XG5cbi5uYXZiYXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hYnN0cmFjdC5qcGdcIik7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXG4uZHJvcGRvd24ge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRyb3BidG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbn1cblxuLyogRHJvcGRvd24gYnV0dG9uICovXG4uZHJvcGRvd24gLmRyb3BidG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG4gIG1hcmdpbjogMDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG59XG5cbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlZWVlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbn1cblxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDEwcHggYmxhY2s7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBmbG9hdDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmhlYWRlcnBhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28tbXB1YXQxLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmFkbWluIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(formBuilder, auth, router) {
        _classCallCheck(this, NavbarComponent);

        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.submitted = false;
        this.email = "";
        this.password = "";
      }

      _createClass(NavbarComponent, [{
        key: "show",
        value: function show() {
          this.showModal = true; // Show-Hide Modal Check
        } //Bootstrap Modal Close event

      }, {
        key: "hide",
        value: function hide() {
          this.showModal = false;
          this.email = "";
          this.password = "";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          this.submitted = true;

          if (this.submitted) {
            this.showModal = false;
            this.auth.signIn(this.email, this.password).then(function () {
              // formData.resetForm();
              _this9.email = "";
              _this9.password = "";
            })["catch"](function (_error) {
              _this9.router.navigateByUrl('/home');
            });
          }

          this.submitted = false;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/previousstudents/previousstudents.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/previousstudents/previousstudents.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreviousstudentsPreviousstudentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  display: flexbox;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: auto;\n  min-height: 100vh;\n  padding: 4rem 0;\n  background-color: white;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\ninput {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  margin-left: 450px;\n  width: 50%;\n  margin-top: 20px;\n  background-color: #e8eeef;\n  color: #3c474e;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 20px;\n  font-family: \"Times New Roman\", Times, serif;\n  display: inline-flex;\n}\n\n.buttonk {\n  margin-top: 10px;\n  color: black;\n  background: #f7f768;\n  font-size: 20px;\n  margin-left: 120px;\n  align-self: center;\n  text-align: center;\n  font-style: normal;\n  height: 45px;\n  width: 85px;\n  font-family: \"Times New Roman\", Times, serif;\n  border: black;\n  border-radius: 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n}\n\n.buttonk:hover {\n  cursor: pointer;\n  background: #39c239;\n  color: black;\n}\n\ntable {\n  border-collapse: collapse;\n  align-items: center;\n  margin-left: 115px;\n  margin-right: 30px;\n  padding: 10px;\n  border-radius: 0.7rem;\n  max-width: 80rem;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n  color: black;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2d7;\n}\n\nth {\n  background-color: black;\n  color: white;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlvdXNzdHVkZW50cy9FOlxcTmV3IGZvbGRlclxcQ29udm9jYXRpb25NYW5hZ2VtZW50XFxDb252b2NhdGlvbk1hbmFnZW1lbnQvc3JjXFxhcHBcXHByZXZpb3Vzc3R1ZGVudHNcXHByZXZpb3Vzc3R1ZGVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ByZXZpb3Vzc3R1ZGVudHMvcHJldmlvdXNzdHVkZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0MsbUJBQUE7RUFDRCx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtBQ0RKOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0FDRkY7O0FES0E7RUFDQSxnQkFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDRixhQUFBO0VBQ0Esa0JBQUE7RUFDRSxtREFBQTtBQ0ZGOztBRElBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFFQyxnQkFBQTtBQ0ZMOztBREtFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQW1CLDJCQUFBO0FDRHJCOztBREdFO0VBRUMsdUJBQUE7RUFDQyxZQUFBO0FDREo7O0FER0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wcmV2aW91c3N0dWRlbnRzL3ByZXZpb3Vzc3R1ZGVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICBkaXNwbGF5OmZsZXhib3g7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgfVxyXG5cclxuIFxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWVmO1xyXG4gIGNvbG9yOiAjM2M0NzRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwwLjAzKSBpbnNldDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uYnV0dG9uayB7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDcsIDI0NywgMTA0KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogODVweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuYm9yZGVyOiBibGFjaztcclxuYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSBpbnNldDtcclxufVxyXG4uYnV0dG9uazpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6cmdiKDU3LCAxOTQsIDU3KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIC8vIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDAuN3JlbTtcclxuICAgXHJcbiAgICAgbWF4LXdpZHRoOiA4MHJlbTtcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyZDd9XHJcbiAgXHJcbiAgdGgge1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxMiwgMTIsIDAuNDI1KTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gICIsImJvZHkge1xuICBkaXNwbGF5OiBmbGV4Ym94O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWVlZjtcbiAgY29sb3I6ICMzYzQ3NGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjAzKSBpbnNldDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5idXR0b25rIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZjdmNzY4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogODVweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYm9yZGVyOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG59XG5cbi5idXR0b25rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzljMjM5O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDExNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbiAgbWF4LXdpZHRoOiA4MHJlbTtcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjJkNztcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/previousstudents/previousstudents.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/previousstudents/previousstudents.component.ts ***!
    \****************************************************************/

  /*! exports provided: PreviousstudentsComponent */

  /***/
  function srcAppPreviousstudentsPreviousstudentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviousstudentsComponent", function () {
      return PreviousstudentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../member.service */
    "./src/app/member.service.ts");

    var PreviousstudentsComponent = /*#__PURE__*/function () {
      function PreviousstudentsComponent(memberService, route) {
        _classCallCheck(this, PreviousstudentsComponent);

        this.memberService = memberService;
        this.route = route;
        this.isclicked = false;
      }

      _createClass(PreviousstudentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.params.subscribe(function (res) {
            console.log(res['a']);
            _this10.branch = res['a'];
          });
        }
      }, {
        key: "searchStudent",
        value: function searchStudent(formData) {
          console.log(formData);
          this.isclicked = true;
          console.log(this.isclicked);
          this.memberService.getPreviousStudents(this.branch, formData.value.year);
        }
      }]);

      return PreviousstudentsComponent;
    }();

    PreviousstudentsComponent.ctorParameters = function () {
      return [{
        type: _member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PreviousstudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-previousstudents',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./previousstudents.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/previousstudents/previousstudents.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./previousstudents.component.scss */
      "./src/app/previousstudents/previousstudents.component.scss"))["default"]]
    })], PreviousstudentsComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/register/register.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  background-color: floralwhite;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.main-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 25px;\n  background: rgba(7, 7, 7, 0.87);\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.required:after {\n  content: \" *\";\n  color: white;\n}\n\n.title_register {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\ninput, select {\n  padding: 5px;\n  margin-bottom: 30px;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #eee;\n}\n\ninput::-webkit-input-placeholder {\n  color: #eee;\n}\n\ninput::-moz-placeholder {\n  color: #eee;\n}\n\ninput::-ms-input-placeholder {\n  color: #eee;\n}\n\ninput::placeholder {\n  color: #eee;\n}\n\noption:focus {\n  border: none;\n}\n\noption {\n  background: black;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRTpcXE5ldyBmb2xkZXJcXENvbnZvY2F0aW9uTWFuYWdlbWVudFxcQ29udm9jYXRpb25NYW5hZ2VtZW50L3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDRiw0Q0FBQTtBQ0NGOztBRENBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUQ7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBREpBO0VBQ0ksV0FBQTtBQ0dKOztBREpBO0VBQ0ksV0FBQTtBQ0dKOztBREpBO0VBQ0ksV0FBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmZsb3JhbHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5tYWluLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNywgNywgNywgMC44Nyk7IFxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJlcXVpcmVkOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6XCIgKlwiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGVfcmVnaXN0ZXJ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3Qge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG59XHJcbm9wdGlvbjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxub3B0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrOyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4iLCJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5tYWluLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDcsIDcsIDcsIDAuODcpO1xufVxuXG4uaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yZXF1aXJlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiICpcIjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGVfcmVnaXN0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pbnB1dCwgc2VsZWN0IHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZWU7XG59XG5cbm9wdGlvbjpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxub3B0aW9uIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../member.service */
    "./src/app/member.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(memberService, router) {
        _classCallCheck(this, RegisterComponent);

        this.memberService = memberService;
        this.router = router;
        this.object1 = {
          enroll: '',
          name: '',
          mname: '',
          fname: '',
          branch: '',
          email: '',
          phone: 0,
          address: '',
          guestno: 0,
          guestnames: ''
        };
        this.result1 = [];
        this.isavailable = false;
        this.search = {
          enrollS: '',
          branchS: '',
          nameS: '',
          eligibility: ''
        }; //memberService.getEligibility(this.search)

        memberService.getseats();
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addMember",
        value: function addMember() {
          this.memberService.addData(this.object1);
          this.object1 = {
            enroll: '',
            name: '',
            mname: '',
            fname: '',
            branch: '',
            email: '',
            phone: 0,
            address: '',
            guestno: 0,
            guestnames: ''
          };
          this.router.navigateByUrl('/home');
        }
        /*
          addName(){
            let object={name: this.enteredName, mail: this.email, password: this.pswd, pno: this.phone}
             this.result.push(object)
             this.enteredName=""
             this.email=""
             this.pswd=""
             this.phone=""
             console.log(this.result)
            
          }*/

      }, {
        key: "submitSearch",
        value: function submitSearch(searchData) {
          //console.log(searchData.value)
          this.search = searchData.value;
          this.memberService.getEligibility(searchData.value);
          searchData.resetForm(); // this.router.navigateByUrl('/home')
        }
      }, {
        key: "submitCall",
        value: function submitCall(formData) {
          console.log(formData);
          this.object1.enroll = this.search.enrollS;
          this.object1.name = this.search.nameS;
          this.object1.mname = formData.value.mname;
          this.object1.fname = formData.value.fname;
          this.object1.branch = this.search.branchS;
          this.object1.email = formData.value.email;
          this.object1.phone = formData.value.phone;
          this.object1.address = formData.value.address;
          this.object1.guestno = formData.value.guestno;
          this.object1.guestnames = formData.value.guestnames;
          this.memberService.addData(this.object1);
          this.router.navigateByUrl('/ticket');
          formData.resetForm(); //
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/schedule/schedule.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/schedule/schedule.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScheduleScheduleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  display: flexbox;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: auto;\n  min-height: 100vh;\n  padding: 4rem 0;\n  background-color: white;\n  font-family: -system-ui, -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\nh1 {\n  text-align: center;\n  color: black;\n  font-size: xx-large;\n}\n\ni {\n  text-align: center;\n  color: black;\n  align-items: center;\n  font-size: xx-large;\n  size: 90px;\n}\n\ntable {\n  margin-left: 115px;\n  margin-right: 30px;\n  padding: 10px;\n  border-radius: 0.7rem;\n  max-width: 80rem;\n}\n\ntable tr:nth-child(even) th {\n  color: #666363;\n  font-weight: 600;\n  border-radius: 0.2rem;\n  background-color: white;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: medium;\n  width: 120px;\n}\n\ntable td {\n  padding: 0.5rem 1rem;\n  margin-right: 10px;\n}\n\ntable th {\n  font-weight: 600;\n  border-radius: 0.2rem;\n  background-color: white;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: medium;\n  width: 120px;\n  color: black;\n}\n\ntable td {\n  font-size: 18px;\n  font-family: \"Times New Roman\", Times, serif;\n  color: black;\n  font-weight: bold;\n  line-height: 1.4;\n  margin: 3px;\n  transition: opacity 0.3s ease;\n}\n\ntable td > span {\n  font-size: 0.8em;\n  font-weight: normal;\n  display: block;\n}\n\n.stage-earth {\n  background-color: #d3d3d3;\n  background-image: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);\n}\n\n.stage-mercury {\n  background-color: #bdcad9;\n  background-image: linear-gradient(315deg, #bdcad9 0%, #e1dada 74%);\n}\n\n.stage-saturn {\n  background-color: #c3cbdc;\n  background-image: linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvRTpcXE5ldyBmb2xkZXJcXENvbnZvY2F0aW9uTWFuYWdlbWVudFxcQ29udm9jYXRpb25NYW5hZ2VtZW50L3NyY1xcYXBwXFxzY2hlZHVsZVxcc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQyxtQkFBQTtFQUNELHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNFQUFBO0FDQUo7O0FERUM7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NMOztBRENDO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNFRjs7QURBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFFQyxnQkFBQTtBQ0NMOztBRENJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ047O0FER0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDRE47O0FETUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNKTjs7QURPSTtFQUVFLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLDZCQUFBO0FDUE47O0FEVUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1JOOztBRGFFO0VBQWMseUJBQUE7RUFDWixrRUFBQTtBQ1RKOztBRGFFO0VBQWdCLHlCQUFBO0VBQ2Qsa0VBQUE7QUNUSjs7QURXRTtFQUFlLHlCQUFBO0VBQ2Isa0VBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBkaXNwbGF5OmZsZXhib3g7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAtc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gaDF7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gfSBcclxuIGl7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgc2l6ZTogOTBweDtcclxuIH1cclxuICB0YWJsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAvLyB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAwLjdyZW07XHJcbiAgIFxyXG4gICAgIG1heC13aWR0aDogODByZW07XHJcbiAgICBcclxuICAgIHRyOm50aC1jaGlsZChldmVuKSB0aCB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTAyLCA5OSwgOTkpO1xyXG4gICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIC8vICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgLy8gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgfVxyXG4gXHJcbiAgICB0aCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGQge1xyXG4gICAgICAgIC8vIHdpZHRoOiA1MDBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgLy8gYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICBtYXJnaW46IDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRkID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnN0YWdlLWVhcnRoIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QzZDNkMyAwJSwgIzU3NjA2ZiA3NCUpO1xyXG4gICAgXHJcbiAgIFxyXG59O1xyXG4gIC5zdGFnZS1tZXJjdXJ5IHtiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjYWQ5O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2JkY2FkOSAwJSwgI2UxZGFkYSA3NCUpO1xyXG4gICAgfTtcclxuICAuc3RhZ2Utc2F0dXJuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjYmRjO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgI2MzY2JkYyAwJSwgI2VkZjFmNCA3NCUpO1xyXG4gIH07IiwiYm9keSB7XG4gIGRpc3BsYXk6IGZsZXhib3g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IC1zeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBzaXplOiA5MHB4O1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XG4gIG1heC13aWR0aDogODByZW07XG59XG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikgdGgge1xuICBjb2xvcjogIzY2NjM2MztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHdpZHRoOiAxMjBweDtcbn1cbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHdpZHRoOiAxMjBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxudGFibGUgdGQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIG1hcmdpbjogM3B4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cbnRhYmxlIHRkID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3RhZ2UtZWFydGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDNkM2QzIDAlLCAjNTc2MDZmIDc0JSk7XG59XG5cbi5zdGFnZS1tZXJjdXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkY2FkOTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2JkY2FkOSAwJSwgI2UxZGFkYSA3NCUpO1xufVxuXG4uc3RhZ2Utc2F0dXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzY2JkYztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgI2MzY2JkYyAwJSwgI2VkZjFmNCA3NCUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/schedule/schedule.component.ts":
  /*!************************************************!*\
    !*** ./src/app/schedule/schedule.component.ts ***!
    \************************************************/

  /*! exports provided: ScheduleComponent */

  /***/
  function srcAppScheduleScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function () {
      return ScheduleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../member.service */
    "./src/app/member.service.ts");

    var ScheduleComponent = /*#__PURE__*/function () {
      function ScheduleComponent(expense) {
        _classCallCheck(this, ScheduleComponent);

        this.expense = expense;
        expense.getschedule();
      }

      _createClass(ScheduleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScheduleComponent;
    }();

    ScheduleComponent.ctorParameters = function () {
      return [{
        type: _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
      }];
    };

    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule.component.scss */
      "./src/app/schedule/schedule.component.scss"))["default"]]
    })], ScheduleComponent);
    /***/
  },

  /***/
  "./src/app/ticket/ticket.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/ticket/ticket.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTicketTicketComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ndl,\ndt,\ndd,\nol,\nnav ul,\nnav li,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: \"Times New Roman\", Times, serif;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  display: table;\n  border: none;\n}\n\ntd {\n  width: 60px;\n  font-weight: 600;\n  font-size: 1em;\n  padding-top: 7px;\n  height: 40px;\n  color: black;\n  font: sans-serif;\n}\n\n/*--start editing from here--*/\n\na {\n  text-decoration: none;\n}\n\n.txt-rt {\n  text-align: right;\n}\n\n/* text align right */\n\n.txt-lt {\n  text-align: left;\n}\n\n/* text align left */\n\n.txt-center {\n  text-align: center;\n}\n\n/* text align center */\n\n.float-rt {\n  float: right;\n}\n\n/* float right */\n\n.float-lt {\n  float: left;\n}\n\n/* float left */\n\n.clearfix {\n  clear: both;\n}\n\n/* clear float */\n\n.pos-relative {\n  position: relative;\n}\n\n/* Position Relative */\n\n.pos-absolute {\n  position: absolute;\n}\n\n/* Position Absolute */\n\n.vertical-base {\n  vertical-align: baseline;\n}\n\n/* vertical align baseline */\n\n.vertical-top {\n  vertical-align: top;\n}\n\n/* vertical align top */\n\nnav.vertical ul li {\n  display: block;\n}\n\n/* vertical menu */\n\nnav.horizontal ul li {\n  display: inline-block;\n}\n\n/* horizontal menu */\n\nimg {\n  max-width: 100%;\n}\n\n/*--end reset--*/\n\nbutton.w3l-cart {\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -ms-transition: 0.5s all;\n  text-decoration: none;\n  outline: none;\n}\n\nbody a:hover {\n  text-decoration: none;\n}\n\n.clearfix {\n  clear: both;\n}\n\n/* content */\n\n.body {\n  /* background: url('/assets/Plasma3.jpg') no-repeat center;\n  background-size: cover;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  -ms-background-size: cover;\n  background-attachment: fixed; */\n  background-color: floralwhite;\n  font-family: \"Source Sans Pro\", sans-serif;\n  /* margin-bottom: 1%; */\n}\n\n.mr_agilemain span {\n  color: #f00;\n}\n\n.w3ls-reg {\n  margin: 0 5vw;\n  background: rgba(128, 128, 128, 0.34);\n  padding: 3.5vw;\n  box-sizing: border-box;\n  display: flex;\n  display: -webkit-flex;\n  flex-wrap: wrap;\n}\n\n.container {\n  display: -moz-flex;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n}\n\nh1 {\n  font-size: 4em;\n  text-transform: uppercase;\n  color: black;\n  font-weight: 600;\n  text-shadow: 4px 3px 1px rgba(0, 0, 0, 0.22);\n  letter-spacing: 2px;\n  text-align: center;\n  margin: 0.8em 1vw 0.9em;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\nh2 {\n  color: black;\n  text-transform: capitalize;\n  margin-bottom: 25px;\n  font-size: 1em;\n  letter-spacing: 0.5px;\n  line-height: 1.7;\n  font-weight: 400;\n}\n\n.mr_agilemain {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.agileits-left {\n  flex-basis: 60%;\n  margin-bottom: 1.5em;\n}\n\nli.smallBox {\n  text-align: left;\n  display: inline-block;\n  margin-right: 2em;\n  color: black;\n  font-weight: 600;\n}\n\n.agileits-right {\n  flex-basis: 40%;\n  margin-bottom: 1.5em;\n}\n\n.tw {\n  width: 50%;\n}\n\nlabel {\n  font-size: 1.2em;\n  color: black;\n  font-weight: 600;\n}\n\ninput[type=text],\ninput[type=number] {\n  padding: 1em;\n  width: 80%;\n  background: transparent;\n  border: 1px solid #888686;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 1em;\n  margin-top: 10px;\n  color: black;\n}\n\n.print {\n  float: left;\n}\n\nbutton {\n  background: black;\n  border: none;\n  margin: auto;\n  color: white;\n  font-weight: 600;\n  padding: 8px 20px;\n  border-radius: 10px;\n  font-size: 1em;\n  letter-spacing: 1px;\n  font-family: \"Times New Roman\", Times, serif;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: green;\n}\n\nul.seat_w3ls {\n  margin: 2em 0;\n}\n\n.screen {\n  width: 100%;\n  background: #ff9800;\n  margin: 2em 0;\n}\n\nh2.wthree {\n  padding: 0.8em;\n  font-size: 1.2em;\n  color: #000;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 7px;\n  word-spacing: 10px;\n}\n\n.smallBox::before {\n  content: \"\";\n  width: 30px;\n  height: 20px;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.greenBox::before {\n  content: \"\";\n  background: Green;\n  box-shadow: inset 0px 2px 3px 0px #ff9800, 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  -moz-box-shadow: inset 0px 2px 3px 0px #ff9800, 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  -webkit-box-shadow: inset 0px 2px 3px 0px #ff9800, 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n}\n\n.redBox::before {\n  content: \"\";\n  background: black;\n  box-shadow: inset 0px 2px 3px 0px #ff9800, 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  -moz-box-shadow: inset 0px 2px 3px 0px #ff9800, 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  -webkit-box-shadow: inset 0px 2px 3px 0px #ff9800, 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n}\n\n.emptyBox::before {\n  content: \"\";\n  box-shadow: inset 0px 2px 3px 0px #ff9800, 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  -moz-box-shadow: inset 0px 2px 3px 0px #ff9800, 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  -webkit-box-shadow: inset 0px 2px 3px 0px #ff9800, 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  background-color: #fff;\n}\n\n.seatGap {\n  width: 150px;\n}\n\n.seatVGap {\n  height: 40px;\n}\n\ntable {\n  text-align: center;\n}\n\n.Displaytable {\n  text-align: center;\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\n.Displaytable td,\n.Displaytable th {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid black;\n  font-weight: 600;\n}\n\n.Displaytable th {\n  color: white;\n}\n\n.Displaytable td {\n  color: black;\n}\n\ntable.Displaytable tr {\n  background: #fff;\n  color: white;\n}\n\ntextarea {\n  border: none;\n  background: transparent;\n  resize: none;\n}\n\ninput[type=checkbox] {\n  width: 13px;\n  margin-right: 14px;\n  cursor: pointer;\n}\n\ninput[type=checkbox]:before {\n  content: \"\";\n  width: 28px;\n  height: 28px;\n  border-radius: 5px;\n  /* Safari 3-4, iOS 1-3.2, Android 1.6- */\n  -webkit-border-radius: 5px;\n  /* Firefox 1-3.6 */\n  -moz-border-radius: 5px;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  border: 3px solid #ff9800;\n  box-shadow: inset 0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  -moz-box-shadow: inset 0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  -webkit-box-shadow: inset 0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 1px 0px 0px rgba(255, 255, 255, 0.8);\n  background-color: #ffffff;\n}\n\ninput[type=checkbox]:checked:before {\n  background-color: green;\n  font-size: 15px;\n}\n\ninput[type=checkbox]:disabled::before {\n  background-color: black;\n  font-size: 15px;\n}\n\n.copy-wthree p {\n  color: #fff;\n  font-size: 15px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  line-height: 1.7;\n  padding: 0 1em;\n}\n\n.copy-wthree p a {\n  color: #fff;\n}\n\n.copy-wthree {\n  margin: 3em 0em;\n  text-align: center;\n}\n\n.displayerBoxes {\n  margin-top: 2em;\n}\n\n/*--responsive--*/\n\n@media (max-width: 1920px) {\n  h1 {\n    font-size: 3.5vw;\n  }\n}\n\n@media (max-width: 1024px) {\n  h1 {\n    font-size: 4.5vw;\n  }\n}\n\n@media (max-width: 800px) {\n  h1 {\n    font-size: 5vw;\n  }\n}\n\n@media (max-width: 667px) {\n  h2.wthree {\n    padding: 0.7em;\n    font-size: 1em;\n  }\n}\n\n@media (max-width: 600px) {\n  .w3ls-reg {\n    width: 500px;\n  }\n}\n\n@media (max-width: 568px) {\n  .mr_agilemain {\n    display: block;\n  }\n\n  input[type=text],\ninput[type=number] {\n    padding: 10px 15px;\n    width: 100%;\n  }\n}\n\n@media (max-width: 480px) {\n  .w3ls-reg {\n    width: 450px;\n  }\n\n  h1 {\n    font-size: 2.5em;\n  }\n\n  .w3ls-login form {\n    padding: 7.5vw;\n  }\n}\n\n@media (max-width: 440px) {\n  h1 {\n    font-size: 2.3em;\n  }\n}\n\n@media (max-width: 414px) {\n  h1 {\n    font-size: 2em;\n  }\n\n  .w3ls-reg {\n    width: 370px;\n  }\n\n  input[type=text],\ninput[type=number] {\n    width: 92%;\n  }\n\n  li.smallBox {\n    margin: 1em 0 0;\n    display: block;\n  }\n}\n\n@media (max-width: 384px) {\n  h1 {\n    font-size: 1.9em;\n  }\n\n  .w3ls-reg {\n    width: 350px;\n  }\n\n  h2.wthree {\n    padding: 0.5em;\n  }\n}\n\n@media (max-width: 320px) {\n  h1 {\n    font-size: 1.5em;\n  }\n\n  .w3ls-reg {\n    width: 280px;\n  }\n\n  input[type=text], input[type=number] {\n    width: 88%;\n  }\n\n  h2.wthree {\n    font-size: 0.95em;\n    letter-spacing: 5px;\n  }\n\n  .copy-wthree p {\n    padding: 0 0.5em;\n  }\n}\n\n/*--//responsive--*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0L0U6XFxOZXcgZm9sZGVyXFxDb252b2NhdGlvbk1hbmFnZW1lbnRcXENvbnZvY2F0aW9uTWFuYWdlbWVudC9zcmNcXGFwcFxcdGlja2V0XFx0aWNrZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RpY2tldC90aWNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0ZJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7Ozs7Ozs7Ozs7O0VBV0ksY0FBQTtBQ0NKOztBREVBOztFQUVJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTs7RUFFSSxZQUFBO0FDQ0o7O0FERUE7Ozs7RUFJSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNDSjs7QURNQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQSw4QkFBQTs7QUFFQTtFQUNJLHFCQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtBQ0pKOztBRE9BLHFCQUFBOztBQUVBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQSxvQkFBQTs7QUFFQTtFQUNJLGtCQUFBO0FDTko7O0FEU0Esc0JBQUE7O0FBRUE7RUFDSSxZQUFBO0FDUEo7O0FEVUEsZ0JBQUE7O0FBRUE7RUFDSSxXQUFBO0FDUko7O0FEV0EsZUFBQTs7QUFFQTtFQUNJLFdBQUE7QUNUSjs7QURZQSxnQkFBQTs7QUFFQTtFQUNJLGtCQUFBO0FDVko7O0FEYUEsc0JBQUE7O0FBRUE7RUFDSSxrQkFBQTtBQ1hKOztBRGNBLHNCQUFBOztBQUVBO0VBQ0ksd0JBQUE7QUNaSjs7QURlQSw0QkFBQTs7QUFFQTtFQUNJLG1CQUFBO0FDYko7O0FEZ0JBLHVCQUFBOztBQUVBO0VBQ0ksY0FBQTtBQ2RKOztBRGlCQSxrQkFBQTs7QUFFQTtFQUNJLHFCQUFBO0FDZko7O0FEa0JBLG9CQUFBOztBQUVBO0VBQ0ksZUFBQTtBQ2hCSjs7QURtQkEsZ0JBQUE7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDakJKOztBRG9CQTtFQUNJLHFCQUFBO0FDakJKOztBRG9CQTtFQUNJLFdBQUE7QUNqQko7O0FEb0JBLFlBQUE7O0FBRUE7RUFDSTs7Ozs7O2lDQUFBO0VBT0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHVCQUFBO0FDbEJKOztBRHNCQTtFQUNJLFdBQUE7QUNuQko7O0FEc0JBO0VBRUksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ3BCSjs7QUQwQkE7RUFHSSxrQkFBQTtFQUdBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBS0EsdUJBQUE7RUFDQSxZQUFBO0FDdkJKOztBRDJCQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7QUN4Qko7O0FEMkJBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDeEJKOztBRDJCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUN4Qko7O0FEMkJBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FDeEJKOztBRDJCQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3hCSjs7QUQyQkE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUN4Qko7O0FEMkJBO0VBQ0ksVUFBQTtBQ3hCSjs7QUQyQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3hCSjs7QUQyQkE7O0VBRUksWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDeEJKOztBRDJCQTtFQUNHLFdBQUE7QUN4Qkg7O0FEMkJBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0QsWUFBQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7QUN4Qko7O0FEMEJBO0VBQ0ksaUJBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksYUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDdkJKOztBRDBCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDdkJKOztBRDBCQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1GQUFBO0VBQ0Esd0ZBQUE7RUFDQSwyRkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRkFBQTtFQUNBLHdGQUFBO0VBQ0EsMkZBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksV0FBQTtFQUNBLG1GQUFBO0VBQ0Esd0ZBQUE7RUFDQSwyRkFBQTtFQUNBLHNCQUFBO0FDdkJKOztBRDBCQTtFQUNJLFlBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksWUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxrQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUN2Qko7O0FEMEJBOztFQUVJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUN2Qko7O0FEeUJBO0VBQ0ksWUFBQTtBQ3RCSjs7QUR3QkE7RUFDSSxZQUFBO0FDckJKOztBRHdCQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDckJKOztBRHdCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNyQko7O0FEd0JBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEZBQUE7RUFDQSxtR0FBQTtFQUNBLHNHQUFBO0VBQ0EseUJBQUE7QUNyQko7O0FEd0JBO0VBQ0ksdUJBQUE7RUFFQSxlQUFBO0FDdEJKOztBRHlCQTtFQUNJLHVCQUFBO0VBRUEsZUFBQTtBQ3ZCSjs7QUQ0QkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUN6Qko7O0FENEJBO0VBQ0ksV0FBQTtBQ3pCSjs7QUQ0QkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUN6Qko7O0FENEJBO0VBQ0ksZUFBQTtBQ3pCSjs7QUQ0QkEsaUJBQUE7O0FBRUE7RUFDSTtJQUNJLGdCQUFBO0VDMUJOO0FBQ0Y7O0FENkJBO0VBQ0k7SUFDSSxnQkFBQTtFQzNCTjtBQUNGOztBRDhCQTtFQUNJO0lBQ0ksY0FBQTtFQzVCTjtBQUNGOztBRCtCQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGNBQUE7RUM3Qk47QUFDRjs7QURnQ0E7RUFDSTtJQUNHLFlBQUE7RUM5Qkw7QUFDRjs7QURpQ0E7RUFDSTtJQUNJLGNBQUE7RUMvQk47O0VEaUNFOztJQUVJLGtCQUFBO0lBQ0EsV0FBQTtFQzlCTjtBQUNGOztBRGlDQTtFQUNJO0lBQ0csWUFBQTtFQy9CTDs7RURpQ0U7SUFDSSxnQkFBQTtFQzlCTjs7RURnQ0U7SUFDSSxjQUFBO0VDN0JOO0FBQ0Y7O0FEZ0NBO0VBQ0k7SUFDSSxnQkFBQTtFQzlCTjtBQUNGOztBRGlDQTtFQUNJO0lBQ0ksY0FBQTtFQy9CTjs7RURpQ0M7SUFDSSxZQUFBO0VDOUJMOztFRGdDRTs7SUFFSSxVQUFBO0VDN0JOOztFRCtCRTtJQUNJLGVBQUE7SUFDQSxjQUFBO0VDNUJOO0FBQ0Y7O0FEK0JBO0VBQ0k7SUFDSSxnQkFBQTtFQzdCTjs7RUQrQkU7SUFDRyxZQUFBO0VDNUJMOztFRDhCRTtJQUNJLGNBQUE7RUMzQk47QUFDRjs7QUQ4QkE7RUFDSTtJQUNJLGdCQUFBO0VDNUJOOztFRDhCRTtJQUNHLFlBQUE7RUMzQkw7O0VENkJFO0lBQ0ksVUFBQTtFQzFCTjs7RUQ0QkU7SUFDSSxpQkFBQTtJQUNBLG1CQUFBO0VDekJOOztFRDJCRTtJQUNJLGdCQUFBO0VDeEJOO0FBQ0Y7O0FEMkJBLG1CQUFBIiwiZmlsZSI6InNyYy9hcHAvdGlja2V0L3RpY2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHksXHJcbmRpdixcclxuc3BhbixcclxuYXBwbGV0LFxyXG5vYmplY3QsXHJcbmlmcmFtZSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxucCxcclxuYmxvY2txdW90ZSxcclxucHJlLFxyXG5hLFxyXG5hYmJyLFxyXG5hY3JvbnltLFxyXG5hZGRyZXNzLFxyXG5iaWcsXHJcbmNpdGUsXHJcbmNvZGUsXHJcbmRlbCxcclxuZGZuLFxyXG5lbSxcclxuaW1nLFxyXG5pbnMsXHJcbmtiZCxcclxucSxcclxucyxcclxuc2FtcCxcclxuc21hbGwsXHJcbnN0cmlrZSxcclxuc3Ryb25nLFxyXG5zdWIsXHJcbnN1cCxcclxudHQsXHJcbnZhcixcclxuYixcclxudSxcclxuaSxcclxuZGwsXHJcbmR0LFxyXG5kZCxcclxub2wsXHJcbm5hdiB1bCxcclxubmF2IGxpLFxyXG5maWVsZHNldCxcclxuZm9ybSxcclxubGFiZWwsXHJcbmxlZ2VuZCxcclxudGFibGUsXHJcbmNhcHRpb24sXHJcbnRib2R5LFxyXG50Zm9vdCxcclxudGhlYWQsXHJcbnRyLFxyXG50aCxcclxudGQsXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5jYW52YXMsXHJcbmRldGFpbHMsXHJcbmVtYmVkLFxyXG5maWd1cmUsXHJcbmZpZ2NhcHRpb24sXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxub3V0cHV0LFxyXG5ydWJ5LFxyXG5zZWN0aW9uLFxyXG5zdW1tYXJ5LFxyXG50aW1lLFxyXG5tYXJrLFxyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuZGV0YWlscyxcclxuZmlnY2FwdGlvbixcclxuZmlndXJlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm9sLFxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gICAgcXVvdGVzOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlOmJlZm9yZSxcclxuYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsXHJcbnE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAvLyBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgLy8gYm9yZGVyLXNwYWNpbmc6IDJweDtcclxuICAgIC8vIGJvcmRlci1jb2xvcjogZ3JleTtcclxufVxyXG5cclxudGQge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udDogIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qLS1zdGFydCBlZGl0aW5nIGZyb20gaGVyZS0tKi9cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udHh0LXJ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4vKiB0ZXh0IGFsaWduIHJpZ2h0ICovXHJcblxyXG4udHh0LWx0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIHRleHQgYWxpZ24gbGVmdCAqL1xyXG5cclxuLnR4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiB0ZXh0IGFsaWduIGNlbnRlciAqL1xyXG5cclxuLmZsb2F0LXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLyogZmxvYXQgcmlnaHQgKi9cclxuXHJcbi5mbG9hdC1sdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLyogZmxvYXQgbGVmdCAqL1xyXG5cclxuLmNsZWFyZml4IHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiBjbGVhciBmbG9hdCAqL1xyXG5cclxuLnBvcy1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIFJlbGF0aXZlICovXHJcblxyXG4ucG9zLWFic29sdXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gQWJzb2x1dGUgKi9cclxuXHJcbi52ZXJ0aWNhbC1iYXNlIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuLyogdmVydGljYWwgYWxpZ24gYmFzZWxpbmUgKi9cclxuXHJcbi52ZXJ0aWNhbC10b3Age1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLyogdmVydGljYWwgYWxpZ24gdG9wICovXHJcblxyXG5uYXYudmVydGljYWwgdWwgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIHZlcnRpY2FsIG1lbnUgKi9cclxuXHJcbm5hdi5ob3Jpem9udGFsIHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogaG9yaXpvbnRhbCBtZW51ICovXHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKi0tZW5kIHJlc2V0LS0qL1xyXG5cclxuYnV0dG9uLnczbC1jYXJ0IHtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG5cclxuYm9keSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNsZWFyZml4IHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiBjb250ZW50ICovXHJcblxyXG4uYm9keSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvUGxhc21hMy5qcGcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbXMtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDElOyAqL1xyXG4gICAgXHJcbn1cclxuXHJcbi5tcl9hZ2lsZW1haW4gc3BhbiB7XHJcbiAgICBjb2xvcjogI2YwMDtcclxufVxyXG5cclxuLnczbHMtcmVnIHtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAwIDV2dztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zNCk7XHJcbiAgICBwYWRkaW5nOiAzLjV2dztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICBcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtc2hhZG93OiA0cHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMC44ZW0gMXZ3IC45ZW07XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm1yX2FnaWxlbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hZ2lsZWl0cy1sZWZ0IHtcclxuICAgIGZsZXgtYmFzaXM6IDYwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG59XHJcblxyXG5saS5zbWFsbEJveCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYWdpbGVpdHMtcmlnaHQge1xyXG4gICAgZmxleC1iYXNpczogNDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbn1cclxuXHJcbi50dyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODY4NjtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5wcmludHtcclxuICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcblxyXG51bC5zZWF0X3czbHMge1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxufVxyXG5cclxuLnNjcmVlbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZjk4MDA7XHJcbiAgICBtYXJnaW46IDJlbSAwO1xyXG59XHJcblxyXG5oMi53dGhyZWUge1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zbWFsbEJveDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmdyZWVuQm94OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6IEdyZWVuO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAzcHggMHB4IHJnYigyNTUsIDE1MiwgMCksIDBweCAxcHggMHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAzcHggMHB4IHJnYigyNTUsIDE1MiwgMCksIDBweCAxcHggMHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAzcHggMHB4IHJnYigyNTUsIDE1MiwgMCksIDBweCAxcHggMHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxufVxyXG5cclxuLnJlZEJveDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCByZ2IoMjU1LCAxNTIsIDApLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCByZ2IoMjU1LCAxNTIsIDApLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCByZ2IoMjU1LCAxNTIsIDApLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbn1cclxuXHJcbi5lbXB0eUJveDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweCAwcHggcmdiKDI1NSwgMTUyLCAwKSwgMHB4IDFweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweCAwcHggcmdiKDI1NSwgMTUyLCAwKSwgMHB4IDFweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweCAwcHggcmdiKDI1NSwgMTUyLCAwKSwgMHB4IDFweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNlYXRHYXAge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uc2VhdFZHYXAge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5EaXNwbGF5dGFibGUgIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4uRGlzcGxheXRhYmxlIHRkLFxyXG4uRGlzcGxheXRhYmxlIHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uRGlzcGxheXRhYmxlIHRoe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5EaXNwbGF5dGFibGUgdGR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnRhYmxlLkRpc3BsYXl0YWJsZSB0ciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvKiBTYWZhcmkgMy00LCBpT1MgMS0zLjIsIEFuZHJvaWQgMS42LSAqL1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvKiBGaXJlZm94IDEtMy42ICovXHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmY5ODAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgLjMpLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIC4zKSwgMHB4IDFweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAuMyksIDBweCAxcHggMHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JlZW47XHJcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgLy8gYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG4uY29weS13dGhyZWUgcCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgIHBhZGRpbmc6MCAxZW07XHJcbn1cclxuXHJcbi5jb3B5LXd0aHJlZSBwIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb3B5LXd0aHJlZSB7XHJcbiAgICBtYXJnaW46IDNlbSAwZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXNwbGF5ZXJCb3hlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbi8qLS1yZXNwb25zaXZlLS0qL1xyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxOTIwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwMjRweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6ODAwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo2NjdweCkge1xyXG4gICAgaDIud3RocmVlIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjdlbTtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgLnczbHMtcmVnIHtcclxuICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1NjhweCkge1xyXG4gICAgLm1yX2FnaWxlbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgLnczbHMtcmVnIHtcclxuICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgfVxyXG4gICAgLnczbHMtbG9naW4gZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogNy41dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NDQwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjQxNHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcbiAgIC53M2xzLXJlZyB7XHJcbiAgICAgICB3aWR0aDogMzcwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICB9XHJcbiAgICBsaS5zbWFsbEJveCB7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gMCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjM4NHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjllbTtcclxuICAgIH1cclxuICAgIC53M2xzLXJlZyB7XHJcbiAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcbiAgICBoMi53dGhyZWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjMyMHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuICAgIC53M2xzLXJlZyB7XHJcbiAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgICAgICAgd2lkdGg6IDg4JTtcclxuICAgIH1cclxuICAgIGgyLnd0aHJlZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIH1cclxuICAgIC5jb3B5LXd0aHJlZSBwIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLy9yZXNwb25zaXZlLS0qLyIsImh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuZGwsXG5kdCxcbmRkLFxub2wsXG5uYXYgdWwsXG5uYXYgbGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG50ZCB7XG4gIHdpZHRoOiA2MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQ6IHNhbnMtc2VyaWY7XG59XG5cbi8qLS1zdGFydCBlZGl0aW5nIGZyb20gaGVyZS0tKi9cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50eHQtcnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLyogdGV4dCBhbGlnbiByaWdodCAqL1xuLnR4dC1sdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIHRleHQgYWxpZ24gbGVmdCAqL1xuLnR4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIHRleHQgYWxpZ24gY2VudGVyICovXG4uZmxvYXQtcnQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi8qIGZsb2F0IHJpZ2h0ICovXG4uZmxvYXQtbHQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLyogZmxvYXQgbGVmdCAqL1xuLmNsZWFyZml4IHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIGNsZWFyIGZsb2F0ICovXG4ucG9zLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBQb3NpdGlvbiBSZWxhdGl2ZSAqL1xuLnBvcy1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLyogUG9zaXRpb24gQWJzb2x1dGUgKi9cbi52ZXJ0aWNhbC1iYXNlIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiB2ZXJ0aWNhbCBhbGlnbiBiYXNlbGluZSAqL1xuLnZlcnRpY2FsLXRvcCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi8qIHZlcnRpY2FsIGFsaWduIHRvcCAqL1xubmF2LnZlcnRpY2FsIHVsIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIHZlcnRpY2FsIG1lbnUgKi9cbm5hdi5ob3Jpem9udGFsIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBob3Jpem9udGFsIG1lbnUgKi9cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyotLWVuZCByZXNldC0tKi9cbmJ1dHRvbi53M2wtY2FydCB7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAtby10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLW1zLXRyYW5zaXRpb246IDAuNXMgYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJvZHkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNsZWFyZml4IHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIGNvbnRlbnQgKi9cbi5ib2R5IHtcbiAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL1BsYXNtYTMuanBnJykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tcy1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIC8qIG1hcmdpbi1ib3R0b206IDElOyAqL1xufVxuXG4ubXJfYWdpbGVtYWluIHNwYW4ge1xuICBjb2xvcjogI2YwMDtcbn1cblxuLnczbHMtcmVnIHtcbiAgbWFyZ2luOiAwIDV2dztcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjM0KTtcbiAgcGFkZGluZzogMy41dnc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtc2hhZG93OiA0cHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMC44ZW0gMXZ3IDAuOWVtO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG5oMiB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tcl9hZ2lsZW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWdpbGVpdHMtbGVmdCB7XG4gIGZsZXgtYmFzaXM6IDYwJTtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG59XG5cbmxpLnNtYWxsQm94IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYWdpbGVpdHMtcmlnaHQge1xuICBmbGV4LWJhc2lzOiA0MCU7XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG4udHcge1xuICB3aWR0aDogNTAlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg2ODY7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wcmludCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG51bC5zZWF0X3czbHMge1xuICBtYXJnaW46IDJlbSAwO1xufVxuXG4uc2NyZWVuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZjk4MDA7XG4gIG1hcmdpbjogMmVtIDA7XG59XG5cbmgyLnd0aHJlZSB7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbiAgd29yZC1zcGFjaW5nOiAxMHB4O1xufVxuXG4uc21hbGxCb3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZ3JlZW5Cb3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IEdyZWVuO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweCAwcHggI2ZmOTgwMCwgMHB4IDFweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweCAwcHggI2ZmOTgwMCwgMHB4IDFweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweCAwcHggI2ZmOTgwMCwgMHB4IDFweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLnJlZEJveDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCAjZmY5ODAwLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCAjZmY5ODAwLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCAjZmY5ODAwLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4uZW1wdHlCb3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCAjZmY5ODAwLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCAjZmY5ODAwLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCAjZmY5ODAwLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2VhdEdhcCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNlYXRWR2FwIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG50YWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLkRpc3BsYXl0YWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5EaXNwbGF5dGFibGUgdGQsXG4uRGlzcGxheXRhYmxlIHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLkRpc3BsYXl0YWJsZSB0aCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLkRpc3BsYXl0YWJsZSB0ZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudGFibGUuRGlzcGxheXRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB3aWR0aDogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLyogU2FmYXJpIDMtNCwgaU9TIDEtMy4yLCBBbmRyb2lkIDEuNi0gKi9cbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIEZpcmVmb3ggMS0zLjYgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmY5ODAwO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggMXB4IDBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDBweCAxcHggMHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMHB4IDFweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNvcHktd3RocmVlIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBwYWRkaW5nOiAwIDFlbTtcbn1cblxuLmNvcHktd3RocmVlIHAgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29weS13dGhyZWUge1xuICBtYXJnaW46IDNlbSAwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpc3BsYXllckJveGVzIHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4vKi0tcmVzcG9uc2l2ZS0tKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiA1dnc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCkge1xuICBoMi53dGhyZWUge1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnczbHMtcmVnIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xuICAubXJfYWdpbGVtYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC53M2xzLXJlZyB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cblxuICAudzNscy1sb2dpbiBmb3JtIHtcbiAgICBwYWRkaW5nOiA3LjV2dztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuM2VtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG5cbiAgLnczbHMtcmVnIHtcbiAgICB3aWR0aDogMzcwcHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICB3aWR0aDogOTIlO1xuICB9XG5cbiAgbGkuc21hbGxCb3gge1xuICAgIG1hcmdpbjogMWVtIDAgMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuOWVtO1xuICB9XG5cbiAgLnczbHMtcmVnIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cblxuICBoMi53dGhyZWUge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cblxuICAudzNscy1yZWcge1xuICAgIHdpZHRoOiAyODBweDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9bnVtYmVyXSB7XG4gICAgd2lkdGg6IDg4JTtcbiAgfVxuXG4gIGgyLnd0aHJlZSB7XG4gICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgfVxuXG4gIC5jb3B5LXd0aHJlZSBwIHtcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICB9XG59XG4vKi0tLy9yZXNwb25zaXZlLS0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ticket/ticket.component.ts":
  /*!********************************************!*\
    !*** ./src/app/ticket/ticket.component.ts ***!
    \********************************************/

  /*! exports provided: TicketComponent */

  /***/
  function srcAppTicketTicketComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketComponent", function () {
      return TicketComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../member.service */
    "./src/app/member.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! SweetAlert */
    "./node_modules/SweetAlert/dist/sweetalert.min.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(SweetAlert__WEBPACK_IMPORTED_MODULE_5__);

    var TicketComponent = /*#__PURE__*/function () {
      // @ViewChild('v') ad :ElementRef;
      function TicketComponent(member, router, document) {
        _classCallCheck(this, TicketComponent);

        // member.getseats();
        this.member = member;
        this.router = router;
        this.flag = false;
        this.i = 0;
        this.j = 0;
        this.seats = [];
        this.Name = this.member.rname;
        this.Branch = this.member.rbranch;
        this.Email = this.member.reid;
        this.Rgno = this.member.rguestno;
        this.isok = false;
      }

      _createClass(TicketComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.disableseat();
        }
      }, {
        key: "print",
        value: function print() {
          this.Name = "";
          this.Branch = "";
          this.Email = "";
          this.router.navigateByUrl('/display');
        }
      }, {
        key: "disableseat",
        value: function disableseat() {
          for (this.j = 0; this.j < this.member.sdata[0].regions.length; this.j++) {
            var v = this.member.sdata[0].regions[this.j];
            console.log(v); // let ab;

            var a = document.getElementById(v);
            a.setAttribute("disabled", "disabled"); // var a = document.getElementById(v);
            // console.log(a);
            // document.getElementById(v)

            a.setAttribute("checked", "true");
          }
        }
      }, {
        key: "checkCheckBoxValue",
        value: function checkCheckBoxValue(v, event) {
          if (event.target.checked) {
            console.log(event.target.value);
            this.seats.push(event.target.value);
            console.log(this.seats);
          }

          if (!event.target.checked) {
            console.log(event.target.value);
            var index = this.seats.indexOf(v);
            this.seats.splice(index, 1);
            console.log(this.seats);
          }

          if (this.seats.length > this.Rgno) {
            this.isok = false;
            SweetAlert__WEBPACK_IMPORTED_MODULE_5___default()({
              text: "Select Right number of Seats",
              icon: "error"
            });
          } else if (this.seats.length == 0 || this.seats.length < this.Rgno) {
            this.isok = false;
          } else {
            this.isok = true;
          }
        }
      }, {
        key: "addseats",
        value: function addseats() {
          //   if(this.onemore){
          // swal({
          //   text:"Select Right number of Seats",
          //   icon:"error",
          // })
          //     }
          // else{
          SweetAlert__WEBPACK_IMPORTED_MODULE_5___default()({
            text: "Your seats are booked!",
            icon: "success"
          });
          console.log(this.Name);
          console.log(this.seats);
          this.member.addSeats(this.Name, this.Branch, this.Email, this.seats); // formData.resetForm()

          for (this.i = 0; this.i < this.seats.length; this.i++) {
            this.member.seatData(this.seats[this.i]);
          }
        }
      }]);

      return TicketComponent;
    }();

    TicketComponent.ctorParameters = function () {
      return [{
        type: _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    TicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ticket',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ticket.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ticket/ticket.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ticket.component.scss */
      "./src/app/ticket/ticket.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))], TicketComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyCoUk1ter2UIdsYwpc4q97sfVQbE_eCwHo",
        authDomain: "convocation-management-1a0a5.firebaseapp.com",
        projectId: "convocation-management-1a0a5",
        storageBucket: "convocation-management-1a0a5.appspot.com",
        messagingSenderId: "329250277478",
        appId: "1:329250277478:web:98db3bf0c5c4980f9c45a7",
        measurementId: "G-1C57G4S8JJ"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\New folder\ConvocationManagement\ConvocationManagement\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map