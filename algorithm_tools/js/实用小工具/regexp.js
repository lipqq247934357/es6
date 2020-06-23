let a = `  
                <li>
                    <span>渠道</span>
                    <span>{{info.channelName}}</span>
                </li>
                <li>
                    <span>借据编码</span>
                    <span>{{info.listId}}</span>
                </li>
                <li>
                    <span>借款人编号</span>
                    <span>{{info.custId}}</span>
                </li>
                <li>
                    <span>金融产品</span>
                    <span>{{info.prodName}}</span>
                </li>
                <li>
                    <span>借款人姓名</span>
                    <span>{{info.custName}}</span>
                </li>
                <li>
                    <span>身份号</span>
                    <span>{{info.idNo}}</span>
                </li>
                <li>
                    <span>还款方式</span>
                    <span>{{info.repayMethod}}</span>
                </li>
                <li>
                    <span>借款金额</span>
                    <span>{{formatAmount(0,0,info.loanAmount)}}</span>
                </li>
                <li>
                    <span>日利率</span>
                    <span>{{formatRate(0,0,info.interestRate)}}</span>
                </li>
                <li>
                    <span>贷款余额</span>
                    <span>{{formatAmount(0,0,info.bal)}}</span>
                </li>
                <li>
                    <span>还款期限</span>
                    <span>{{info.loanTerm}}</span>
                </li>
                <li>
                    <span>放款日</span>
                    <span>{{formatterData(0,0,info.beginDate)}}</span>
                </li>
                <li>
                    <span>到期日</span>
                    <span>{{formatterData(0,0,info.endDate)}}</span>
                </li>
                <li>
                    <span>起息日</span>
                    <span>{{formatterData(0,0,info.endDate)}}</span>
                </li>
                <li>
                    <span>拆分方式</span>
                    <span>{{info.assetSpiltWay}}</span>
                </li>
                <li>
                    <span>拆分比例</span>
                    <span>{{info.assetSpiltValue}}</span>
                </li>
                <li>
                    <span>出资方</span>
                    <span>{{info.contributiveName}}</span>
                </li>`;

/**
 * 先将 <li> </li> 替换掉
 * 然后每个<span>前面加个<li> 每个</span>后面加个</li>
 *
 */
let content = a.replace(new RegExp('<li>', 'g'), '');
content = content.replace(new RegExp('</li>', 'g'), '');
content = content.replace(new RegExp('<span>', 'g'), '<li><span>');
content = content.replace(new RegExp('</span>', 'g'), '</span></li>');
console.log(content);
