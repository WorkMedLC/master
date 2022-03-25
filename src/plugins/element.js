import Vue from 'vue';
import {
	Menu,
	Submenu,
	MenuItem,
	Button,
	ButtonGroup,
	Tabs,
	TabPane,
	Icon,
	Row,
	Col,
	Card,
	Carousel,
	CarouselItem,
	Container,
	Header,
	Aside,
	Main,
	Footer,
	Link,
	Divider,
	Image,
	Backtop,
} from 'element-ui';
import '../element-variables.scss';
import locale from 'element-ui/lib/locale/lang/en';

Vue.prototype.$ELEMENT = {locale};
Vue.use(Menu), Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Backtop);
