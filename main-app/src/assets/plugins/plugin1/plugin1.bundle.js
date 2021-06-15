(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.plugin1 = {}, global.core, global.common));
}(this, (function (exports, core, common) { 'use strict';

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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var HomeComponent = /** @class */ (function () {
        function HomeComponent() {
        }
        HomeComponent = __decorate([
            core.Component({
                selector: 'plugin1-home',
                template: "Plugin1 home component",
            }),
            __metadata("design:paramtypes", [])
        ], HomeComponent);
        return HomeComponent;
    }());

    var Plugin1Module = /** @class */ (function () {
        function Plugin1Module() {
        }
        Plugin1Module = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                declarations: [HomeComponent],
                entryComponents: [HomeComponent],
                providers: [{
                        provide: 'plugins',
                        useValue: [
                            {
                                name: 'Home',
                                component: HomeComponent
                            }
                        ]
                    }]
            })
        ], Plugin1Module);
        return Plugin1Module;
    }());

    exports.Plugin1Module = Plugin1Module;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
