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
    poets11: Poet[];
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
            { id: 2, name: '曹植', poems: '', detail: '曹植（192年－232年12月27日），字子建，沛国谯县（今安徽省亳州市）人，' +
            '生于东武阳（今山东莘县，一说鄄城），是曹操与武宣卞皇后所生第三子，生前曾为陈王，去世后谥号“思”，因此又称陈思王。' +
            '曹植是三国时期著名文学家，作为建安文学的代表人物之一与集大成者，他在两晋南北朝时期，被推尊到文章典范的地位。' +
            '其代表作有《洛神赋》《白马篇》《七哀诗》等。后人因其文学上的造诣而将他与曹操、曹丕合称为“三曹”。其诗以笔力雄健和词采画眉见长，' +
            '留有集三十卷，已佚，今存《曹子建集》为宋人所编。曹植的散文同样亦具有“情兼雅怨，体被文质”的特色，加上其品种的丰富多样，' +
            '使他在这方面取得了卓越的成就。南朝宋文学家谢灵运有“天下才有一石，曹子建独占八斗”的评价。文学批评家钟嵘亦赞曹植“骨气奇高，' +
            '词彩华茂，情兼雅怨，体被文质，粲溢今古，卓尔不群。”并在《诗品》中把他列为品第最高的诗人。王士祯尝论汉魏以来二千年间诗家堪称“仙才”者，' +
            '曹植、李白、苏轼三人耳。' },
            { id: 3, name: '诸葛亮', poems: '', detail: '诸葛亮（181年-234年10月8日），字孔明，号卧龙，徐州琅琊阳都（今山东临沂市沂南县）人，' +
            '三国时期蜀国丞相，杰出的政治家、军事家、外交家、文学家、书法家、发明家。早年随叔父诸葛玄到荆州，诸葛玄死后，诸葛亮就在襄阳隆中隐居。' +
            '后刘备三顾茅庐请出诸葛亮，联孙抗曹，于赤壁之战大败曹军。形成三国鼎足之势，又夺占荆州。建安十六年（211年），攻取益州。' +
            '继又击败曹军，夺得汉中。蜀章武元年（221年），刘备在成都建立蜀汉政权，诸葛亮被任命为丞相，主持朝政。蜀后主刘禅继位，' +
            '诸葛亮被封为武乡侯，领益州牧。勤勉谨慎，大小政事必亲自处理，赏罚严明；与东吴联盟，改善和西南各族的关系；实行屯田政策，加强战备。' +
            '前后六次北伐中原，多以粮尽无功。终因积劳成疾，于蜀建兴十二年（234年）病逝于五丈原（今陕西宝鸡岐山境内），享年54岁。' +
            '刘禅追封其为忠武侯，后世常以武侯尊称诸葛亮。东晋政权因其军事才能特追封他为武兴王。诸葛亮散文代表作有《出师表》《诫子书》等。' +
            '曾发明木牛流马、孔明灯等，并改造连弩，叫做诸葛连弩，可一弩十矢俱发。诸葛亮一生“鞠躬尽瘁、死而后已”，' +
            '是中国传统文化中忠臣与智者的代表人物。' },
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
        this.poets11 = [
            { id: 1, name: '李白', poems: '', detail: '李白（701年－762年） ，字太白，号青莲居士，又号“谪仙人”，' +
            '是唐代伟大的浪漫主义诗人，被后人誉为“诗仙”，与杜甫并称为“李杜”，为了与另两位诗人李商隐与杜牧即“小李杜”区别，' +
            '杜甫与李白又合称“大李杜”。据《新唐书》记载，李白为兴圣皇帝（凉武昭王李暠）九世孙，与李唐诸王同宗。其人爽朗大方，' +
            '爱饮酒作诗，喜交友。李白深受黄老列庄思想影响，有《李太白集》传世，诗作中多以醉时写的，代表作有《望庐山瀑布》' +
            '《行路难》《蜀道难》《将进酒》《梁甫吟》《早发白帝城》等多首。李白所作词赋，宋人已有传记（如文莹《湘山野录》卷上），' +
            '就其开创意义及艺术成就而言，“李白词”享有极为崇高的地位。' },
            { id: 2, name: '白居易', poems: '', detail: '' },
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
          else if (id === 11) {
            return of(this.poets10);
        }
    }
    getHero(id: number): Observable<Poet> {
        return of(Poets.find(poet => poet.id === id));
    }
}
