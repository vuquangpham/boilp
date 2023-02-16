import Page from '../../classes/Page';
import Aside from "../../components/Aside";

export default class Lesson extends Page{
    constructor(){
        super({
            element: '.lesson',
        });
    }

    create(){
        super.create();
        this.id = this.element.getAttribute('data-lesson');

        // create instance
        const instanceName = "lesson_" + this.id;
        import(`./${instanceName}.js`)
            .then((instance) => {
                this.lesson = new instance.default({
                    el: this.element,
                    canvas: this.element.querySelector('#canvas')
                });
            });

        this.asideElement = new Aside();
    }
}