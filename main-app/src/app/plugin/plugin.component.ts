import { HttpClient } from '@angular/common/http';
import { Component, Compiler, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

declare const SystemJS: any;

@Component({
  selector: 'app-plugin',
  template: '<div #content></div>'
})
export class PluginComponent {
  @ViewChild('content', { read: ViewContainerRef }) content: ViewContainerRef;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly compiler: Compiler,
    private readonly injector: Injector) {
  }

  public ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.content?.clear();
      let pluginName = params.get('name');
      if (pluginName) {

        this.http.get("assets/plugins/metadata.json").subscribe(plugins => {
          let config: PluginConfig = plugins[pluginName];
          if (config) {
            this.loadPlugin(config);
          }
        });
      }
    });
  }

  private async loadPlugin(config: PluginConfig) {
    // import external module bundle
    const module = await SystemJS.import(config.location);

    // compile module
    const moduleFactory = await this.compiler.compileModuleAsync<any>(module[config.moduleName]);

    // resolve component factory
    const moduleRef = moduleFactory.create(this.injector);

    //get the custom made provider name 'plugins' 
    const componentProvider = moduleRef.injector.get('plugins');

    //from plugins array load the component on position 0 
    const componentFactory = moduleRef.componentFactoryResolver
      .resolveComponentFactory<any>(
        componentProvider[0].component
      );

    // compile component 
    var pluginComponent = this.content.createComponent(componentFactory);

    //sending @Input() values 
    // let value = pluginComponent.instance.anyInput; 
    //pluginComponent.instance.anyInput = value; 

    //accessing the component template view
    //(pluginComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }
}

export class PluginConfig {
  public location: string;
  public moduleName: string;
}