import { RenderContext3D } from "./render/RenderContext3D"
	import { VertexBuffer3D } from "../graphics/VertexBuffer3D"
	import { VertexDeclaration } from "../graphics/VertexDeclaration"
	import { LayaGL } from "laya/layagl/LayaGL"
	import { IDestroy } from "laya/resource/IDestroy"
	import { Stat } from "laya/utils/Stat"
	import { WebGLContext } from "laya/webgl/WebGLContext"
	
	/**
	 * @private
	 * <code>GeometryElement</code> 类用于实现几何体元素,该类为抽象类。
	 */
	export class GeometryElement implements IDestroy {
		/**@private */
		protected static _typeCounter:number = 0;
		
		/**@private */
		protected _destroyed:boolean;
		
		/**
		 * 获取是否销毁。
		 * @return 是否销毁。
		 */
		 get destroyed():boolean {
			return this._destroyed;
		}
		
		/**
		 * 创建一个 <code>GeometryElement</code> 实例。
		 */
		constructor(){
			/*[DISABLE-ADD-VARIABLE-DEFAULT-VALUE]*/
			this._destroyed = false;
		}
		
		/**
		 * 获取几何体类型。
		 */
		 _getType():number {
			throw "GeometryElement:must override it.";
		}
		
		/**
		 * @private
		 * @return  是否需要渲染。
		 */
		 _prepareRender(state:RenderContext3D):boolean {
			return true;
		}
		
		/**
		 * @private
		 */
		 _render(state:RenderContext3D):void {
			throw "GeometryElement:must override it.";
		}
		
		/**
		 * 销毁。
		 */
		 destroy():void {
			if (this._destroyed)
				return;
			this._destroyed = true;
		}
	}
