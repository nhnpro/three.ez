import { Camera, Mesh, Scene } from "three";
import { BufferGeometry, Group, Material, Object3D as Object3DBase, WebGLRenderer } from "three/index";
import { Cursor, Events, InteractionEvents, Object3DExtPrototype, Tween } from "../index";

export class Object3D extends Object3DBase implements Object3DExtPrototype {
    enabled: boolean;
    interceptByRaycaster: boolean;
    hitboxes: Mesh[];
    focusable: boolean;
    draggable: boolean;
    findDropTarget: boolean;
    scene: Scene;
    cursor: Cursor;
    cursorDrag: Cursor;
    cursorDrop: Cursor;
    needsRender: boolean;
    get hovered(): boolean;
    get focused(): boolean;
    get clicking(): boolean;
    get dragging(): boolean;
    get enabledState(): boolean;
    get firstFocusable(): Object3D;
    applyFocus(): void;
    applyBlur(): void;
    on<K extends keyof Events>(type: K | K[], listener: (args?: Events[K]) => void): (args?: Events[K]) => void;
    hasEvent<K extends keyof Events>(type: K, listener: (args?: Events[K]) => void): boolean;
    off<K extends keyof Events>(type: K, listener: (args?: Events[K]) => void): void;
    trigger<K extends keyof Events>(type: K, args?: Events[K]): void;
    triggerAncestor<K extends keyof InteractionEvents>(type: K, args?: InteractionEvents[K]): void;
    setManualDetectionMode(): void;
    detectChanges(recursive?: boolean): void;
    bindProperty<T extends keyof this>(property: T, getCallback: () => this[T], renderOnChange?: boolean): this;
    unbindProperty<T extends keyof this>(property: T): this;
    tween(): Tween<Object3D>;
    override parent: Object3D;
    override children: Object3D[];
    override traverse(callback: (object: Object3D) => any): void;
    override traverseAncestors(callback: (object: Object3D) => any): void;
    override traverseVisible(callback: (object: Object3D) => any): void;
    override getObjectById(id: number): Object3D;
    override getObjectByName(name: string): Object3D;
    override getObjectByProperty(name: string, value: any): Object3D;
    override getObjectsByProperty(name: string, value: any): Object3D[];
    override onBeforeRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group) => void;
    override onAfterRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group) => void;
}
