import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Poet } from './poet';
import { Poets } from './mock-poets';

@Injectable({ providedIn: 'root' })
export class PoetService {
    poets1: Poet[];
    poets2: Poet[];
    poets3: Poet[];
    poets4: Poet[];
    poets5: Poet[];
    poets6: Poet[];
    poets7: Poet[];
    poets8: Poet[];
    poets9: Poet[];
    poets10: Poet[];
    constructor() {
        this.poets1 = [
            { id: 1, name: '1', poems: '', detail: '' },
            { id: 2, name: '', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
        this.poets2 = [
            { id: 1, name: '2', poems: '', detail: '' },
            { id: 2, name: '', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
        this.poets3 = [
            { id: 1, name: '2', poems: '', detail: '' },
            { id: 2, name: '', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
        this.poets4 = [
            { id: 1, name: '2', poems: '', detail: '' },
            { id: 2, name: '', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
        this.poets5 = [
            { id: 1, name: '2', poems: '', detail: '' },
            { id: 2, name: '', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
        this.poets6 = [
            { id: 1, name: '2', poems: '', detail: '' },
            { id: 2, name: '', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
        this.poets7 = [
            {
                id: 1, name: '曹操', poems: '', detail: '曹操（155年－220年3月15日），字孟德，一名吉利，小字阿瞒，' +
                    '沛国谯县（今安徽亳州）人。东汉末年杰出的政治家、军事家、文学家、书法家，三国中曹魏政权的奠基人。' +
                    '曹操曾担任东汉丞相，后加封魏王，奠定了曹魏立国的基础。去世后谥号为武王。其子曹丕称帝后，追尊为武皇帝，庙号太祖。' +
                    '东汉末年，天下大乱，曹操以汉天子的名义征讨四方，对内消灭二袁、吕布、刘表、马超、韩遂等割据势力，' +
                    '对外降服南匈奴、乌桓、鲜卑等，统一了中国北方，并实行一系列政策恢复经济生产和社会秩序，扩大屯田、兴修水利、奖励农桑、' +
                    '重视手工业、安置流亡人口、实行“租调制”，从而使中原社会渐趋稳定、经济出现转机。黄河流域在曹操统治下，政治渐见清明，' +
                    '经济逐步恢复，阶级压迫稍有减轻，社会风气有所好转。曹操在汉朝的名义下所采取的一些措施具有积极作用。' +
                    '曹操军事上精通兵法，重贤爱才，为此不惜一切代价将看中的潜能分子收于麾下；生活上善诗歌，抒发自己的政治抱负，' +
                    '并反映汉末人民的苦难生活，气魄雄伟，慷慨悲凉；散文亦清峻整洁，开启并繁荣了建安文学，给后人留下了宝贵的精神财富，' +
                    '鲁迅评价其为“改造文章的祖师”。同时曹操也擅长书法，唐朝张怀瓘在《书断》将曹操的章草评为“妙品”。'
            },
            { id: 2, name: '曹植', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
        this.poets8 = [
            { id: 1, name: '2', poems: '', detail: '' },
            { id: 2, name: '', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
        this.poets9 = [
            { id: 1, name: '2', poems: '', detail: '' },
            { id: 2, name: '', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
        this.poets10 = [
            { id: 1, name: '2', poems: '', detail: '' },
            { id: 2, name: '', poems: '', detail: '' },
            { id: 3, name: '', poems: '', detail: '' },
            { id: 4, name: '', poems: '', detail: '' }];
    }
    getPoets(id: number): Observable<Poet[]> {
        if (id === 1) {
            return of(this.poets1);
        } else if (id === 2) {
            return of(this.poets2);
        } else if (id === 3) {
            return of(this.poets3);
        } else if (id === 4) {
            return of(this.poets4);
        } else if (id === 5) {
            return of(this.poets5);
        } else if (id === 6) {
            return of(this.poets6);
        } else if (id === 7) {
            return of(this.poets7);
        } else if (id === 8) {
            return of(this.poets8);
        } else if (id === 9) {
            return of(this.poets9);
        } else if (id === 10) {
            return of(this.poets10);
        }
    }
    getHero(id: number): Observable<Poet> {
        return of(Poets.find(poet => poet.id === id));
    }
}
