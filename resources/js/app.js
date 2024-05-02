import './bootstrap';

import {createApp} from "vue";
import app from "./components/app.vue"
import router from './router';

import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import ButtonGroup from 'primevue/buttongroup';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Chart from 'primevue/chart';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice';
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import Dropdown from 'primevue/dropdown';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FloatLabel from 'primevue/floatlabel';
import Galleria from 'primevue/galleria';
import IconField from 'primevue/iconfield';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputIcon from 'primevue/inputicon';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import VirtualScroller from 'primevue/virtualscroller';

import BlockViewer from './components/BlockViewer.vue';

import '../../public/panel/assets/styles.scss';

const appInstance = createApp(app);

appInstance.use(router);
appInstance.use(PrimeVue, {ripple: true});
appInstance.use(ToastService);
appInstance.use(DialogService);
appInstance.use(ConfirmationService);

appInstance.directive('tooltip', Tooltip);
appInstance.directive('badge', BadgeDirective);
appInstance.directive('ripple', Ripple);
appInstance.directive('styleclass', StyleClass);

appInstance.component('BlockViewer', BlockViewer);

appInstance.component('Accordion', Accordion);
appInstance.component('AccordionTab', AccordionTab);
appInstance.component('AutoComplete', AutoComplete);
appInstance.component('Avatar', Avatar);
appInstance.component('AvatarGroup', AvatarGroup);
appInstance.component('Badge', Badge);
appInstance.component('BlockUI', BlockUI);
appInstance.component('Breadcrumb', Breadcrumb);
appInstance.component('Button', Button);
appInstance.component('ButtonGroup', ButtonGroup);
appInstance.component('Calendar', Calendar);
appInstance.component('Card', Card);
appInstance.component('Chart', Chart);
appInstance.component('Carousel', Carousel);
appInstance.component('CascadeSelect', CascadeSelect);
appInstance.component('Checkbox', Checkbox);
appInstance.component('Chip', Chip);
appInstance.component('Chips', Chips);
appInstance.component('ColorPicker', ColorPicker);
appInstance.component('Column', Column);
appInstance.component('ColumnGroup', ColumnGroup);
appInstance.component('ConfirmDialog', ConfirmDialog);
appInstance.component('ConfirmPopup', ConfirmPopup);
appInstance.component('ContextMenu', ContextMenu);
appInstance.component('DataTable', DataTable);
appInstance.component('DataView', DataView);
appInstance.component('DataViewLayoutOptions', DataViewLayoutOptions);
appInstance.component('DeferredContent', DeferredContent);
appInstance.component('Dialog', Dialog);
appInstance.component('Divider', Divider);
appInstance.component('Dock', Dock);
appInstance.component('Dropdown', Dropdown);
appInstance.component('DynamicDialog', DynamicDialog);
appInstance.component('Fieldset', Fieldset);
appInstance.component('FileUpload', FileUpload);
appInstance.component('FloatLabel', FloatLabel);
appInstance.component('Galleria', Galleria);
appInstance.component('IconField', IconField);
appInstance.component('Image', Image);
appInstance.component('InlineMessage', InlineMessage);
appInstance.component('Inplace', Inplace);
appInstance.component('InputGroup', InputGroup);
appInstance.component('InputGroupAddon', InputGroupAddon);
appInstance.component('InputIcon', InputIcon);
appInstance.component('InputMask', InputMask);
appInstance.component('InputNumber', InputNumber);
appInstance.component('InputSwitch', InputSwitch);
appInstance.component('InputText', InputText);
appInstance.component('Knob', Knob);
appInstance.component('Listbox', Listbox);
appInstance.component('MegaMenu', MegaMenu);
appInstance.component('Menu', Menu);
appInstance.component('Menubar', Menubar);
appInstance.component('Message', Message);
appInstance.component('MultiSelect', MultiSelect);
appInstance.component('OrderList', OrderList);
appInstance.component('OrganizationChart', OrganizationChart);
appInstance.component('OverlayPanel', OverlayPanel);
appInstance.component('Paginator', Paginator);
appInstance.component('Panel', Panel);
appInstance.component('PanelMenu', PanelMenu);
appInstance.component('Password', Password);
appInstance.component('PickList', PickList);
appInstance.component('ProgressBar', ProgressBar);
appInstance.component('ProgressSpinner', ProgressSpinner);
appInstance.component('RadioButton', RadioButton);
appInstance.component('Rating', Rating);
appInstance.component('Row', Row);
appInstance.component('SelectButton', SelectButton);
appInstance.component('ScrollPanel', ScrollPanel);
appInstance.component('ScrollTop', ScrollTop);
appInstance.component('Slider', Slider);
appInstance.component('Sidebar', Sidebar);
appInstance.component('Skeleton', Skeleton);
appInstance.component('SpeedDial', SpeedDial);
appInstance.component('SplitButton', SplitButton);
appInstance.component('Splitter', Splitter);
appInstance.component('SplitterPanel', SplitterPanel);
appInstance.component('Steps', Steps);
appInstance.component('TabMenu', TabMenu);
appInstance.component('TabView', TabView);
appInstance.component('TabPanel', TabPanel);
appInstance.component('Tag', Tag);
appInstance.component('Textarea', Textarea);
appInstance.component('Terminal', Terminal);
appInstance.component('TieredMenu', TieredMenu);
appInstance.component('Timeline', Timeline);
appInstance.component('Toast', Toast);
appInstance.component('Toolbar', Toolbar);
appInstance.component('ToggleButton', ToggleButton);
appInstance.component('Tree', Tree);
appInstance.component('TreeSelect', TreeSelect);
appInstance.component('TreeTable', TreeTable);
appInstance.component('TriStateCheckbox', TriStateCheckbox);
appInstance.component('VirtualScroller', VirtualScroller);

appInstance.mount('#app');
