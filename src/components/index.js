// page
import scrollview from './scrollView'

//图标
import icon from './icon/icon'

// 折叠
import foldgroup from './folds/foldGroup'
import foldrow from './folds/foldRow'

// 列表
import cellgroup from './cell/cellgroup'
import cell from './cell/cell'

//底部版权
import copyright from './copyright'

// 栅栏布局
import flexbox from './flexcol/flexbox'
import flexitem from './flexcol/flexitem'

import button from './button/button'
import buttonripple from './button/buttonRipple'

// 树状
import tree from './tree/Tree'

var components = {
	'stm-icon': icon,
	'stm-fold-group': foldgroup,
	'stm-fold-row': foldrow,
	'stm-cell-group': cellgroup,
	'stm-cell': cell,
	'stm-scroll-view': scrollview,
	'stm-copyright': copyright,
	'stm-flex-box': flexbox,
	'stm-flex-item': flexitem,
	'stm-button': button,
	'stm-button-ripple': buttonripple,
	'stm-tree': tree,
}
export default {
  install (Vue) {
    Object.keys(components).forEach((key) => Vue.component(key, components[key]))
  }
}
