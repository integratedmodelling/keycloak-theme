import{c0 as M,c1 as N,_ as z,k as r,l as k}from"./index-C9t2UlUN.js";import*as i from"react";const n={expandableSection:"pf-c-expandable-section",expandableSectionContent:"pf-c-expandable-section__content",expandableSectionToggle:"pf-c-expandable-section__toggle",expandableSectionToggleIcon:"pf-c-expandable-section__toggle-icon",expandableSectionToggleText:"pf-c-expandable-section__toggle-text",modifiers:{expanded:"pf-m-expanded",detached:"pf-m-detached",truncate:"pf-m-truncate",limitWidth:"pf-m-limit-width",displayLg:"pf-m-display-lg",indented:"pf-m-indented",active:"pf-m-active",expandTop:"pf-m-expand-top",overpassFont:"pf-m-overpass-font"}},u={name:"--pf-c-expandable-section--m-truncate__content--LineClamp",value:"3",var:"var(--pf-c-expandable-section--m-truncate__content--LineClamp)"};var a;(function(s){s.default="default",s.truncate="truncate"})(a||(a={}));const f=(s,e)=>{!e||s<1||e.style.setProperty(u.name,s.toString())};class m extends i.Component{constructor(e){super(e),this.expandableContentRef=i.createRef(),this.observer=()=>{},this.checkToggleVisibility=()=>{var t;if(!((t=this.expandableContentRef)===null||t===void 0)&&t.current){const o=this.props.truncateMaxLines||parseInt(u.value),d=this.expandableContentRef.current.scrollHeight/parseInt(getComputedStyle(this.expandableContentRef.current).lineHeight);this.setState({hasToggle:d>o})}},this.resize=()=>{const{offsetWidth:t}=this.expandableContentRef.current;this.state.previousWidth!==t&&(this.setState({previousWidth:t}),this.checkToggleVisibility())},this.handleResize=M(this.resize,250),this.state={isExpanded:e.isExpanded,hasToggle:!0,previousWidth:void 0}}calculateToggleText(e,t,o,d){return d&&t!==""?t:!d&&o!==""?o:e}componentDidMount(){if(this.props.variant===a.truncate){const e=this.expandableContentRef.current;this.setState({previousWidth:e.offsetWidth}),this.observer=N(e,this.handleResize,!1),this.props.truncateMaxLines&&f(this.props.truncateMaxLines,e),this.checkToggleVisibility()}}componentDidUpdate(e){if(this.props.variant===a.truncate&&e.truncateMaxLines!==this.props.truncateMaxLines){const t=this.expandableContentRef.current;f(this.props.truncateMaxLines,t),this.checkToggleVisibility()}}componentWillUnmount(){this.props.variant===a.truncate&&this.observer()}render(){const e=this.props,{onToggle:t,isActive:o,className:d,toggleText:b,toggleTextExpanded:T,toggleTextCollapsed:v,toggleContent:_,children:C,isExpanded:p,isDetached:g,displaySize:S,isWidthLimited:E,isIndented:L,contentId:y,variant:c,truncateMaxLines:D}=e,R=z(e,["onToggle","isActive","className","toggleText","toggleTextExpanded","toggleTextCollapsed","toggleContent","children","isExpanded","isDetached","displaySize","isWidthLimited","isIndented","contentId","variant","truncateMaxLines"]);let h=t,l=p;p===void 0&&(l=this.state.isExpanded,h=I=>{this.setState({isExpanded:I},()=>t(this.state.isExpanded))});const W=this.calculateToggleText(b,T,v,l),x=!g&&i.createElement("button",{className:r(n.expandableSectionToggle),type:"button","aria-expanded":l,onClick:()=>h(!l)},c!==a.truncate&&i.createElement("span",{className:r(n.expandableSectionToggleIcon)},i.createElement(k,{"aria-hidden":!0})),i.createElement("span",{className:r(n.expandableSectionToggleText)},_||W));return i.createElement("div",Object.assign({className:r(n.expandableSection,l&&n.modifiers.expanded,o&&n.modifiers.active,g&&n.modifiers.detached,S==="large"&&n.modifiers.displayLg,E&&n.modifiers.limitWidth,L&&n.modifiers.indented,c===a.truncate&&n.modifiers.truncate,d)},R),c===a.default&&x,i.createElement("div",{ref:this.expandableContentRef,className:r(n.expandableSectionContent),hidden:c!==a.truncate&&!l,id:y},C),c===a.truncate&&this.state.hasToggle&&x)}}m.displayName="ExpandableSection";m.defaultProps={className:"",toggleText:"",toggleTextExpanded:"",toggleTextCollapsed:"",onToggle:s=>{},isActive:!1,isDetached:!1,displaySize:"default",isWidthLimited:!1,isIndented:!1,contentId:"",variant:"default"};export{m as E};
//# sourceMappingURL=ExpandableSection-DjAskWMd.js.map