import{b as BtS,c as StB}from'/that=binary.switcher.js';
import{TtB64,TfB64}from'/to.or.from.js';
import{a,d,beta}from'/json.js';
"use strict";/*
author: Christian Feilert
version: 1.a.0
type: expanded/alpha
date started: 18/1-2024
date last modified by author: 18/1-2024  */
let hold=[d.a[0],d.a[1],d.a[2]],g1=d.b;
function arr_rst(){
	hold=[d.a[0],d.a[1],d.a[2]];
	g1=[d.b[0],d.b[1],d.b[2],d.b[3],d.b[4],d.b[5],d.b[6],d.b[7],d.b[8],d.b[9],d.b[10],d.b[11],d.b[12],d.b[13],d.b[14],d.b[15]]
};
function hr_rtn(){let z=hold.pop();hold.unshift(z);
	return z;
};
async function h_get(str){
	let a0=await crypto.subtle.digest(hr_rtn(),new TextEncoder().encode(str));
	return Array.from(new Uint8Array(a0)).map((q)=>q.toString(16).padStart(2,'0')).join('')
};
function BsTB(txt){let new_str=StB(txt).match(/.{1,8}/g),result='',str,p=[4,5,6,7,0,1,2,3];
	for(str of new_str){result+=str[p[0]]+str[p[1]]+str[p[2]]+str[p[3]]+str[p[4]]+str[p[5]]+str[p[6]]+str[p[7]];p.push(p.shift())
	};return result
};
async function hr(str,phrase){let b0=0,b1=Math.abs(str.length+phrase.length),b2=a.i,b3=0;
	while(b0!=b1){hold.unshift(hold.pop());g1.unshift(g1.pop());b0++
	}let a0=await h_get(str),a1=await h_get(phrase),a2=[a.a,a.b,a.c,a.d,a.e,a.f,a.g,a.h],a3=a0.length,a4=a1.length,a5,a6;
	if(Number.isInteger(str.length/3)){a1=a1.split('').reverse().join('');g1.push(g1.shift())}
	a5=[a2[beta(a1[1])],a2[beta(a0[a3-2])],a2[beta(a1[a4-3])],a2[beta(a0[2])],a2[beta(a0[1])],a2[beta(a1[a4-2])],a2[beta(a0[a3-3])],a2[beta(a1[2])]];
	a6=[[a5[1][4],a5[6][3],a5[4][8],a5[3][3]],[a5[2][9],a5[6][8],a5[0][4],a5[1][6]],[a5[4][5],a5[5][8],a5[3][4],a5[3][5]],[a5[0][1],a5[2][0],a5[7][2],a5[5][3]]];
	if(isNaN(parseInt(a1[a4-2]))){a6.unshift(a6.pop())
	}let c0=parseInt(a6[0][1]),c1=parseInt(a6[3][0]),c2=parseInt(a6[2][2]),c3=parseInt(a6[1][3]),c4=a1.split(''),c5='',c6,c7=[c0,c1,c2,c3];
	for(b3;b3<a0.length;b3++){c6=c4.pop();
		if(beta(c6)<=3){c5+=a0[b3]+c7[1];a6.push(a6.shift());
		}else{c7.push(c7.shift());c5+=c7[2]+c6
		};c4.unshift(c6);
	};c5=c5.replaceAll(c5[c5.length-2],b2[128-c0]).replaceAll(c5[2],String(Math.abs(c1+c0*c7[3]))).replaceAll(c5[c5.length-4],b2[128-c3]);
	if(Number.isInteger(parseInt(a6[1][1])/2)){c5=c5.split('').reverse().join('')
	}return c5.substring(beta(c5[0]),Math.abs(c5.length-beta(c5[1])))
};
async function gather(arg){arr_rst();
	let a0=a.i,a1=btoa(new TextEncoder().encode(arg).join('')).padStart(12,a0[beta(arg[1])]),a2,a3,a4,a5,a6,a7=BsTB,a8=arg.length,a9;
	if(a8<=3){arg=self.crypto.randomUUID().replaceAll('-','')};a2=await hr(a1,arg);
	a3=beta(a2[2]);a4=beta(arg[3]);a5=beta(a2[a2.length-2]);a6=beta(arg[a8-3]);
	if(a5<=3){a2=a2.replaceAll(a2[a6],a0[a3*a4])};a9=Math.round(Math.sqrt(a8*(a6+a3)*Math.PI.toFixed(5)));
	if(!Number.isInteger(a9/a5)){a7=StB};a9=a7(a2.replaceAll(a2[a3],a0[a4*a6]));
	if(beta(a2[3])<=3){a9=a9.split('').reverse().join('')}return a9
};
function SnC(txt){let result=[],i=0,num=4;
  for(i;i<txt.length;i+=num){result.push(txt.substr(i,num));
  }return result;
};
async function reorder(str,phrase){
	let a0=SnC(StB(str)),a1=SnC(await gather(phrase)),a2=0,a3,a4,a5=[],result='';
	for(a2;a2<a0.length;a2++){a3=a1.pop();a1.unshift(a3);a4=a0[a2].split('');
		if(a3==g1[0]){a5.push([a4[0],a4[3],a4[2],a4[1]].join(''))
		}if(a3==g1[1]){a5.push([a4[3],a4[2],a4[1],a4[0]].join(''))
		}if(a3==g1[5]){a5.push([a4[2],a4[1],a4[0],a4[3]].join(''))
		}if(a3==g1[8]){a5.push([a4[1],a4[0],a4[3],a4[2]].join(''))
		}if(a3==g1[14]){a5.push(a4.join(''))
		}if(a3==g1[6]){a5.push([a4[1],a4[2],a4[3],a4[0]].join(''))
		}if(a3==g1[15]){a5.push(a4.reverse().join(''))
		}if(a3==g1[2]){a5.push([a4[3],a4[0],a4[1],a4[2]].join(''))
		}if(a3==g1[12]){a5.push([a4[2],a4[0],a4[1],a4[3]].join(''))
		}if(a3==g1[3]){a5.push([a4[0],a4[1],a4[3],a4[2]].join(''))
		}if(a3==g1[7]){a5.push([a4[1],a4[3],a4[2],a4[0]].join(''))
		}if(a3==g1[4]){a5.push([a4[3],a4[2],a4[0],a4[1]].join(''))
		}if(a3==g1[9]){a5.push([a4[1],a4[3],a4[0],a4[2]].join(''))
		}if(a3==g1[13]){a5.push([a4[3],a4[0],a4[2],a4[1]].join(''))
		}if(a3==g1[11]){a5.push([a4[0],a4[2],a4[1],a4[3]].join(''))
		}if(a3==g1[10]){a5.push(a4.reverse().join(''))
		}
	}while(a5.length!=0){result=a5.pop()+result
	}return TfB64(BtS(result))
};
async function disorder(str,phrase){
	let a0=SnC(StB(TtB64(str))),a1=SnC(await gather(phrase)),a2=0,a3,a4,a5=[],result='';
	for(a2;a2<a0.length;a2++){a3=a1.pop();a1.unshift(a3);a4=a0[a2].split('');
		if(a3==g1[0]){a5.push([a4[0],a4[3],a4[2],a4[1]].join(''))
		}if(a3==g1[1]){a5.push([a4[3],a4[2],a4[1],a4[0]].join(''))
		}if(a3==g1[5]){a5.push([a4[2],a4[1],a4[0],a4[3]].join(''))
		}if(a3==g1[8]){a5.push([a4[1],a4[0],a4[3],a4[2]].join(''))
		}if(a3==g1[14]){a5.push(a4.join(''))					
		}if(a3==g1[6]){a5.push([a4[3],a4[0],a4[1],a4[2]].join(''))
		}if(a3==g1[15]){a5.push(a4.reverse().join(''))			
		}if(a3==g1[2]){a5.push([a4[1],a4[2],a4[3],a4[0]].join(''))
		}if(a3==g1[12]){a5.push([a4[1],a4[2],a4[0],a4[3]].join(''))
		}if(a3==g1[3]){a5.push([a4[0],a4[1],a4[3],a4[2]].join(''))
		}if(a3==g1[7]){a5.push([a4[3],a4[0],a4[2],a4[1]].join(''))
		}if(a3==g1[4]){a5.push([a4[2],a4[3],a4[1],a4[0]].join(''))
		}if(a3==g1[9]){a5.push([a4[2],a4[0],a4[3],a4[1]].join(''))
		}if(a3==g1[13]){a5.push([a4[1],a4[3],a4[2],a4[0]].join(''))
		}if(a3==g1[11]){a5.push([a4[0],a4[2],a4[1],a4[3]].join(''))
		}if(a3==g1[10]){a5.push(a4.reverse().join(''))
		}
	}while(a5.length!=0){result+=a5.shift()
	}return BtS(result)
};export{reorder,disorder}
