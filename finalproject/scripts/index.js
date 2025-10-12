import { initHamburgerMenu } from './burguer-bt.js';
import { loadPlans } from './plans.js';
import './select-section-plan.js';

document.addEventListener('DOMContentLoaded', () => {
    initHamburgerMenu();

    loadPlans('residential-plans', './data/plans.json');
    loadPlans('corporate-plans', './data/corp-plans.json');
    loadPlans('extra-services', './data/extras.json');

});