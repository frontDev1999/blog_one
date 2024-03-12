import{_ as t,cu as r,b1 as o,E as e,cv as n,cw as a,bG as i,cx as s,aD as m}from"./index.js";var c=n,f=function(f){function p(t){var o=f.call(this)||this;return o.type="view",o.dimensions=["x","y"],o._roamTransformable=new r,o._rawTransformable=new r,o.name=t,o}return t(p,f),p.prototype.setBoundingRect=function(t,r,e,n){return this._rect=new o(t,r,e,n),this._rect},p.prototype.getBoundingRect=function(){return this._rect},p.prototype.setViewRect=function(t,r,e,n){this._transformTo(t,r,e,n),this._viewRect=new o(t,r,e,n)},p.prototype._transformTo=function(t,r,e,n){var a=this.getBoundingRect(),i=this._rawTransformable;i.transform=a.calculateTransform(new o(t,r,e,n));var s=i.parent;i.parent=null,i.decomposeTransform(),i.parent=s,this._updateTransform()},p.prototype.setCenter=function(t,r){t&&(this._center=[e(t[0],r.getWidth()),e(t[1],r.getHeight())],this._updateCenterAndZoom())},p.prototype.setZoom=function(t){t=t||1;var r=this.zoomLimit;r&&(null!=r.max&&(t=Math.min(r.max,t)),null!=r.min&&(t=Math.max(r.min,t))),this._zoom=t,this._updateCenterAndZoom()},p.prototype.getDefaultCenter=function(){var t=this.getBoundingRect();return[t.x+t.width/2,t.y+t.height/2]},p.prototype.getCenter=function(){return this._center||this.getDefaultCenter()},p.prototype.getZoom=function(){return this._zoom||1},p.prototype.getRoamTransform=function(){return this._roamTransformable.getLocalTransform()},p.prototype._updateCenterAndZoom=function(){var t=this._rawTransformable.getLocalTransform(),r=this._roamTransformable,o=this.getDefaultCenter(),e=this.getCenter(),a=this.getZoom();e=n([],e,t),o=n([],o,t),r.originX=e[0],r.originY=e[1],r.x=o[0]-e[0],r.y=o[1]-e[1],r.scaleX=r.scaleY=a,this._updateTransform()},p.prototype._updateTransform=function(){var t=this._roamTransformable,r=this._rawTransformable;r.parent=t,t.updateTransform(),r.updateTransform(),a(this.transform||(this.transform=[]),r.transform||i()),this._rawTransform=r.getLocalTransform(),this.invTransform=this.invTransform||[],s(this.invTransform,this.transform),this.decomposeTransform()},p.prototype.getTransformInfo=function(){var t=this._rawTransformable,o=this._roamTransformable,e=new r;return e.transform=o.transform,e.decomposeTransform(),{roam:{x:e.x,y:e.y,scaleX:e.scaleX,scaleY:e.scaleY},raw:{x:t.x,y:t.y,scaleX:t.scaleX,scaleY:t.scaleY}}},p.prototype.getViewRect=function(){return this._viewRect},p.prototype.getViewRectAfterRoam=function(){var t=this.getBoundingRect().clone();return t.applyTransform(this.transform),t},p.prototype.dataToPoint=function(t,r,o){var e=r?this._rawTransform:this.transform;return o=o||[],e?c(o,t,e):m(o,t)},p.prototype.pointToData=function(t){var r=this.invTransform;return r?c([],t,r):[t[0],t[1]]},p.prototype.convertToPixel=function(t,r,o){var e=u(r);return e===this?e.dataToPoint(o):null},p.prototype.convertFromPixel=function(t,r,o){var e=u(r);return e===this?e.pointToData(o):null},p.prototype.containPoint=function(t){return this.getViewRectAfterRoam().contain(t[0],t[1])},p.dimensions=["x","y"],p}(r);function u(t){var r=t.seriesModel;return r?r.coordinateSystem:null}function p(t,r,o){var e=t.target;e.x+=r,e.y+=o,e.dirty()}function h(t,r,o,e){var n=t.target,a=t.zoomLimit,i=t.zoom=t.zoom||1;if(i*=r,a){var s=a.min||0,m=a.max||1/0;i=Math.max(Math.min(m,i),s)}var c=i/t.zoom;t.zoom=i,n.x-=(o-n.x)*(c-1),n.y-=(e-n.y)*(c-1),n.scaleX*=c,n.scaleY*=c,n.dirty()}function l(t,r){return t.pointToProjected?t.pointToProjected(r):t.pointToData(r)}function T(t,r,o,e){var n=t.getZoom(),a=t.getCenter(),i=r.zoom,s=t.projectedToPoint?t.projectedToPoint(a):t.dataToPoint(a);if(null!=r.dx&&null!=r.dy&&(s[0]-=r.dx,s[1]-=r.dy,t.setCenter(l(t,s),e)),null!=i){if(o){var m=o.min||0,c=o.max||1/0;i=Math.max(Math.min(n*i,c),m)/n}t.scaleX*=i,t.scaleY*=i;var f=(r.originX-t.x)*(i-1),u=(r.originY-t.y)*(i-1);t.x-=f,t.y-=u,t.updateTransform(),t.setCenter(l(t,s),e),t.setZoom(i*n)}return{center:t.getCenter(),zoom:t.getZoom()}}export{f as V,h as a,T as b,p as u};
