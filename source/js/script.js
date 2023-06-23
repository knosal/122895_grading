/* в этот файл добавляет скрипты*/
import { mapDisplay, mapDisplayNoJs } from './map.js';
import { initButtonMenu } from './popup-menu.js';
import { initRangeSlider } from './range-slider.js';


mapDisplayNoJs();
mapDisplay();
initButtonMenu();
initRangeSlider();
