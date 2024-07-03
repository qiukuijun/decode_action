//Wed Jul 03 2024 04:16:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x347eb6 = new _0x1ce1ec("顺丰速运"),
  _0x29ead1 = ["\n"],
  _0x2bcf7f = ["sfsyUrl"];
let _0x220631 = _0x2bcf7f.map(_0x3797fe => (_0x347eb6.isNode() ? process.env[_0x3797fe] : _0x347eb6.getdata(_0x3797fe)) || ""),
  _0x43fc94 = [],
  _0x4265c3 = 0,
  _0x1596df = 0;
const _0x36544f = "mcs-mimp-web.sf-express.com",
  _0xc19d3 = "application/json;charset=utf-8",
  _0x4f1a36 = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ",
  _0x31a16c = "wwesldfs29aniversaryvdld29",
  _0x58cf10 = "MCS-MIMP-CORE",
  _0x36d8b2 = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利"],
  _0x2509fc = 8,
  _0x17f8a9 = 1.03,
  _0x2a9b1c = "sfsy";
const _0x439def = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
class _0x58be19 {
  constructor(_0x187895) {
    this.index = ++_0x4265c3;
    this.name = this.index;
    this.valid = false;
    this.refreshUrl = _0x187895;
    this.cookieList = {};
    this.deviceId = _0x347eb6.randomPattern("xxxxxxxx-xxxx-xxxx");
  }
  get_cookie(_0x173498 = "") {
    let _0x553f11 = _0x173498?.["split"](",") || [];
    return Object.keys(this.cookieList).filter(_0x4ab026 => !!_0x4ab026 && !_0x553f11.includes(_0x4ab026)).map(_0x4a0dfa => [_0x4a0dfa, this.cookieList[_0x4a0dfa]].join("=")).join("; ") + ";";
  }
  async taskApi(_0x592850 = {}) {
    let _0x2426f8 = {};
    try {
      let _0x586f99 = _0x592850.url.replace("//", "/").split("/")[1],
        _0x100fbb = _0x592850.url;
      if (_0x592850.queryParam) {
        _0x100fbb += "?" + _0x347eb6.json2str(_0x592850.queryParam, "&", true);
      }
      let _0x4b3ec3 = Date.now(),
        _0x110f2b = "token=" + _0x31a16c + "&timestamp=" + _0x4b3ec3 + "&sysCode=" + _0x58cf10,
        _0x39fc2a = _0x5618e0(_0x110f2b);
      const _0x5a1da2 = {
        Host: _0x586f99,
        Connection: "keep-alive",
        "User-Agent": _0x4f1a36,
        sysCode: _0x58cf10,
        timestamp: _0x4b3ec3,
        signature: _0x39fc2a,
        Cookie: this.cookie
      };
      const _0x52646a = {
        url: _0x100fbb,
        headers: _0x5a1da2,
        timeout: 5000
      };
      if (_0x592850.body) {
        _0x52646a.headers["Content-Type"] = _0x592850["Content-Type"] || _0xc19d3;
        if (typeof _0x592850.body === "object") {
          if (_0x52646a.headers["Content-Type"].includes("json")) {
            _0x52646a.body = JSON.stringify(_0x592850.body);
          } else {
            for (let _0x2a87fb in _0x592850.body) {
              typeof _0x592850.body[_0x2a87fb] === "object" && (_0x592850.body[_0x2a87fb] = JSON.stringify(_0x592850.body[_0x2a87fb]));
            }
            _0x52646a.body = _0x347eb6.json2str(_0x592850.body, "&");
          }
        } else {
          _0x52646a.body = _0x592850.body;
        }
        _0x347eb6.isNode() ? _0x52646a.headers["Content-Length"] = _0x52646a.body ? Buffer.byteLength(_0x52646a.body, "utf8") : 0 : _0x52646a.headers["Content-Length"] = _0x52646a.body ? _0x52646a.body.length : 0;
      }
      if (_0x592850.urlObjectParam) {
        Object.assign(_0x52646a, _0x592850.urlObjectParam);
      }
      if (_0x592850.headerParam) {
        Object.assign(_0x52646a.headers, _0x592850.headerParam);
      }
      if (_0x592850.debugIn) {
        console.log(_0x52646a);
      }
      _0x2426f8 = Object.assign({}, await _0x56b20b(_0x592850.method, _0x52646a));
      _0x2426f8.statusCode = _0x2426f8?.["err"]?.["response"]?.["statusCode"] || _0x2426f8?.["resp"]?.["statusCode"];
      _0x2426f8.statusCode != 200 && _0x2426f8.statusCode != 302 && console.log("[" + _0x592850.fn + "]返回[" + _0x2426f8.statusCode + "]");
      _0x592850.debugOut && (_0x2426f8?.["resp"]?.["headers"]["set-cookie"] && console.log(_0x2426f8?.["resp"]?.["headers"]["set-cookie"]), _0x2426f8?.["resp"]?.["body"] && console.log(_0x2426f8?.["resp"]?.["body"]));
      let _0x1130f1 = _0x2426f8?.["resp"]?.["headers"]["set-cookie"] || _0x2426f8?.["resp"]?.["headers"]["Set-Cookie"];
      if (_0x1130f1) {
        if (Array.isArray(_0x1130f1)) {
          for (let _0x5f06b0 of _0x1130f1) {
            let _0x291356 = _0x5f06b0.split(";")[0].replace(/ /g, "").split("=");
            if (_0x291356?.["length"] > 1) {
              this.cookieList[_0x291356[0]] = _0x291356[1];
            }
          }
        } else {
          let _0x168166 = _0x1130f1?.["split"](",") || [];
          for (let _0x3f26a8 of _0x168166) {
            let _0x54bcbd = _0x3f26a8.split(";")[0].replace(/ /g, "").split("=");
            if (_0x54bcbd?.["length"] > 1) {
              this.cookieList[_0x54bcbd[0]] = _0x54bcbd[1];
            }
          }
        }
        this.cookie = this.get_cookie();
      }
      if (_0x2426f8?.["resp"]?.["body"]) {
        if (typeof _0x2426f8.resp.body === "object") {
          _0x2426f8.result = _0x2426f8.resp.body || {};
        } else {
          try {
            _0x2426f8.result = JSON.parse(_0x2426f8.resp.body) || {};
          } catch (_0x37cf35) {
            _0x2426f8.result = _0x2426f8.resp.body || {};
          }
        }
      } else {
        _0x2426f8.result = {};
      }
    } catch (_0x57a8a7) {
      console.log(_0x57a8a7);
    } finally {
      return Promise.resolve(_0x2426f8);
    }
  }
  async refresh_cookie(_0x15d123 = {}) {
    let _0x10c88f = {};
    try {
      const _0x400919 = {
        fn: "refresh_cookie",
        method: "get",
        url: this.refreshUrl
      };
      _0x10c88f = Object.assign({}, await this.taskApi(_0x400919));
      let _0x3ca3dc = _0x10c88f?.["req"]?.["path"];
      if (!this.cookieList.sessionId && _0x3ca3dc) {
        let _0x590b6d = _0x3ca3dc.match(/token=(\w+)/);
        _0x590b6d && (this.cookieList.sessionId = _0x590b6d[1]);
        let _0x1e1280 = _0x3ca3dc.match(/mobile=([\w\*]+)/);
        _0x1e1280 && (this.cookieList._login_mobile_ = _0x1e1280[1]);
        this.cookie = this.get_cookie();
      }
      this.cookieList.sessionId ? (this.valid = true, this.name = this.cookieList._login_mobile_, console.log("账号[" + this.index + "][" + this.name + "]登录成功")) : _0x347eb6.logAndNotify("账号[" + this.index + "] url登录失败");
    } catch (_0x3441f3) {
      console.log(_0x3441f3);
    } finally {
      return Promise.resolve(_0x10c88f);
    }
  }
  async personalInfo(_0x539f3f = {}) {
    let _0x19d2fb = {};
    try {
      const _0x11f2d5 = {
        fn: "personalInfo",
        method: "post",
        url: "https://" + _0x36544f + "/mcs-mimp/member/personalInfo",
        body: {}
      };
      _0x19d2fb = Object.assign({}, await this.taskApi(_0x11f2d5));
      let _0x9811b3 = _0x19d2fb.result;
      _0x9811b3.success == true ? _0x347eb6.logAndNotify("账号[" + this.index + "][" + this.name + "]积分: " + _0x9811b3.obj.availablePoints) : console.log("查询账号信息失败: " + _0x9811b3.errorMessage);
    } catch (_0x1d30df) {
      console.log(_0x1d30df);
    } finally {
      return Promise.resolve(_0x19d2fb);
    }
  }
  async automaticSignFetchPackage(_0x172698, _0x50b1d0 = {}) {
    let _0x4c5f8f = {};
    try {
      const _0x3196f7 = {
        fn: "automaticSignFetchPackage",
        method: "post",
        url: "https://" + _0x36544f + "/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage",
        body: {}
      };
      _0x3196f7.body.comeFrom = _0x50b1d0.comeFrom || "vioin";
      _0x3196f7.body.channelFrom = _0x50b1d0.channelFrom || "SFAPP";
      _0x4c5f8f = Object.assign({}, await this.taskApi(_0x3196f7));
      let _0x458cac = _0x4c5f8f.result;
      _0x458cac.success == true ? _0x458cac?.["obj"]?.["hasFinishSign"] ? console.log("今天已签到") : _0x458cac?.["obj"]?.["integralTaskSignPackageVOList"]?.["length"] && console.log("签到获得: " + _0x458cac?.["obj"]?.["integralTaskSignPackageVOList"]?.["map"](_0x8cb85b => _0x8cb85b.packetName)?.["join"](", ")) : console.log("签到失败: " + _0x458cac.errorMessage);
    } catch (_0xe759df) {
      console.log(_0xe759df);
    } finally {
      return Promise.resolve(_0x4c5f8f);
    }
  }
  async queryPointTaskAndSignFromES(_0x43f71d = {}) {
    let _0x116cb1 = {};
    try {
      let _0x4d1cf1 = {
        fn: "queryPointTaskAndSignFromES",
        method: "post",
        url: "https://" + _0x36544f + "/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES",
        body: {
          channelType: (_0x43f71d.channelType || 1).toString(),
          deviceId: this.deviceId
        }
      };
      _0x116cb1 = Object.assign({}, await this.taskApi(_0x4d1cf1));
      let _0x503b8d = _0x116cb1.result;
      if (_0x503b8d.success == true) {
        for (let _0x9b5259 of _0x503b8d.obj.taskTitleLevels) {
          switch (_0x9b5259.status) {
            case 2:
              if (_0x36d8b2.includes(_0x9b5259.title)) {
                break;
              }
              await this.finishTask(_0x9b5259);
            case 1:
              await this.fetchIntegral(_0x9b5259);
              break;
            case 3:
              break;
            default:
              console.log("[" + _0x9b5259.title + "] -- 未知状态[" + _0x9b5259.status + "]");
              break;
          }
        }
      } else {
        console.log("查询账号信息失败: " + _0x503b8d.errorMessage);
      }
    } catch (_0x322682) {
      console.log(_0x322682);
    } finally {
      return Promise.resolve(_0x116cb1);
    }
  }
  async finishTask(_0x28d86c, _0x1ab90e = {}) {
    let _0x57b744 = {};
    try {
      const _0x3831d0 = {
        taskCode: _0x28d86c.taskCode
      };
      const _0x362de8 = {
        fn: "finishTask",
        method: "post",
        url: "https://" + _0x36544f + "/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
        body: _0x3831d0
      };
      _0x57b744 = Object.assign({}, await this.taskApi(_0x362de8));
      let _0x204843 = _0x57b744.result;
      _0x204843.success == true ? console.log("完成任务[" + _0x28d86c.title + "]成功") : console.log("完成任务[" + _0x28d86c.title + "]失败: " + _0x204843.errorMessage);
    } catch (_0x4524ab) {
      console.log(_0x4524ab);
    } finally {
      return Promise.resolve(_0x57b744);
    }
  }
  async fetchIntegral(_0x5270b0, _0x3a2b3f = {}) {
    let _0x8186a7 = {};
    try {
      const _0x3f4862 = {
        strategyId: _0x5270b0.strategyId,
        taskId: _0x5270b0.taskId,
        taskCode: _0x5270b0.taskCode,
        deviceId: this.deviceId
      };
      const _0x2edd20 = {
        fn: "fetchIntegral",
        method: "post",
        url: "https://" + _0x36544f + "/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral",
        body: _0x3f4862
      };
      _0x8186a7 = Object.assign({}, await this.taskApi(_0x2edd20));
      let _0x2b3778 = _0x8186a7.result;
      _0x2b3778.success == true ? console.log("领取任务[" + _0x5270b0.title + "]奖励: " + _0x2b3778.obj.point + "积分") : console.log("领取任务[" + _0x5270b0.title + "]奖励失败: " + _0x2b3778.errorMessage);
    } catch (_0x5499bc) {
      console.log(_0x5499bc);
    } finally {
      return Promise.resolve(_0x8186a7);
    }
  }
  async queryPointTaskAndSign(_0xff8004 = {}) {
    let _0xe8c49c = {};
    try {
      const _0x7fd38a = {
        fn: "queryPointTaskAndSign",
        method: "post",
        url: "https://" + _0x36544f + "/mcs-mimp/appTask/queryPointTaskAndSign",
        body: {}
      };
      _0x7fd38a.body.channel = _0xff8004.channel || "SFAPP";
      _0x7fd38a.body.pageType = _0xff8004.pageType || "APP_MINE_TASK";
      _0xe8c49c = Object.assign({}, await this.taskApi(_0x7fd38a));
      let _0x58ae73 = _0xe8c49c.result;
      if (_0x58ae73.success == true) {
        for (let _0xc7cf38 of _0x58ae73.obj.taskTitleLevels) {
          if (_0x36d8b2.includes(_0xc7cf38.title)) {
            continue;
          }
          await this.scanPageToRecord(_0xc7cf38);
          await this.fetchPoint(_0xc7cf38);
        }
      } else {
        console.log("查询账号信息失败: " + _0x58ae73.errorMessage);
      }
    } catch (_0xa6601b) {
      console.log(_0xa6601b);
    } finally {
      return Promise.resolve(_0xe8c49c);
    }
  }
  async scanPageToRecord(_0x41de9c, _0x6131b1 = {}) {
    let _0x36c7be = {};
    try {
      const _0x377f96 = {
        channel: _0x6131b1.channel || "SFAPP",
        pageType: _0x41de9c.pageType
      };
      const _0x4deb24 = {
        fn: "scanPageToRecord",
        method: "post",
        url: "https://" + _0x36544f + "/mcs-mimp/appTask/scanPageToRecord",
        body: _0x377f96
      };
      _0x36c7be = Object.assign({}, await this.taskApi(_0x4deb24));
      let _0x5da6f1 = _0x36c7be.result;
      _0x5da6f1.success == true ? console.log("完成任务[" + _0x41de9c.title + "]成功") : console.log("完成任务[" + _0x41de9c.title + "]失败: " + _0x5da6f1.errorMessage);
    } catch (_0x1a4132) {
      console.log(_0x1a4132);
    } finally {
      return Promise.resolve(_0x36c7be);
    }
  }
  async fetchPoint(_0x39a43c, _0x51b326 = {}) {
    let _0x19451a = {};
    try {
      const _0x543f75 = {
        channel: _0x51b326.channel || "SFAPP",
        pageType: _0x39a43c.pageType,
        deviceId: this.deviceId
      };
      const _0x27c866 = {
        fn: "fetchPoint",
        method: "post",
        url: "https://" + _0x36544f + "/mcs-mimp/appTask/fetchPoint",
        body: _0x543f75
      };
      _0x19451a = Object.assign({}, await this.taskApi(_0x27c866));
      let _0x1b6c4e = _0x19451a.result;
      _0x1b6c4e.success == true ? console.log("领取任务[" + _0x39a43c.title + "]奖励成功") : console.log("领取任务[" + _0x39a43c.title + "]奖励失败: " + _0x1b6c4e.errorMessage);
    } catch (_0x5ddeac) {
      console.log(_0x5ddeac);
    } finally {
      return Promise.resolve(_0x19451a);
    }
  }
  async userTask() {
    let _0x4a3b52 = {};
    try {
      console.log("\n============= 账号[" + this.index + "] =============");
      await this.refresh_cookie();
      if (!this.valid) {
        return Promise.resolve(_0x4a3b52);
      }
      await this.automaticSignFetchPackage();
      await this.queryPointTaskAndSignFromES();
      const _0x26ba12 = {
        channelType: 3
      };
      await this.queryPointTaskAndSignFromES(_0x26ba12);
      await this.personalInfo();
    } catch (_0x594fd) {
      console.log(_0x594fd);
    } finally {
      return Promise.resolve(_0x4a3b52);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x393502();
    return;
  }
  if (!(await _0x4da6df())) {
    return;
  }
  if (!_0xc029a8()) {
    return;
  }
  for (let _0x372db5 of _0x43fc94) {
    await _0x372db5.userTask();
  }
})().catch(_0x494398 => console.log(_0x494398)).finally(() => _0x347eb6.done());
async function _0x393502() {
  if ($request.url.includes("share/weChat/shareGiftReceiveRedirect") || $request.url.includes("share/app/shareRedirect")) {
    try {
      let _0x4cff8b = $request.url,
        _0x4a4a5a = false;
      for (let _0x373dec of _0x2bcf7f) {
        let _0x3b8709 = (_0x347eb6.isNode() ? process.env[_0x373dec] : _0x347eb6.getdata(_0x373dec)) || "",
          _0x5047cd = _0x29ead1[0];
        for (let _0x31d3a1 of _0x29ead1) {
          if (_0x3b8709?.["includes"](_0x31d3a1)) {
            _0x5047cd = _0x31d3a1;
            break;
          }
        }
        _0x3b8709?.["includes"](_0x4cff8b) && (_0x4a4a5a = true);
      }
      if (!_0x4a4a5a) {
        let _0x180498 = _0x2bcf7f[0],
          _0x36a38a = (_0x347eb6.isNode() ? process.env[_0x180498] : _0x347eb6.getdata(_0x180498)) || "",
          _0x5bb613 = _0x29ead1[0];
        for (let _0x488ccc of _0x29ead1) {
          if (_0x36a38a?.["includes"](_0x488ccc)) {
            _0x5bb613 = _0x488ccc;
            break;
          }
        }
        let _0xb3d77 = _0x36a38a ? _0x36a38a.split(_0x5bb613) : [];
        _0xb3d77.push(_0x4cff8b);
        _0x36a38a = _0xb3d77.join(_0x5bb613);
        _0x347eb6.setdata(_0x36a38a, _0x180498);
        _0x347eb6.msg("获取第" + _0xb3d77.length + "个账户CK成功，保存到变量[" + _0x180498 + "]: " + _0x4cff8b);
      }
    } catch (_0x38acd5) {
      console.log(_0x38acd5);
    }
  }
}
function _0xc029a8() {
  for (let _0x2944f2 of _0x220631) {
    if (!_0x2944f2) {
      continue;
    }
    let _0x38cca1 = _0x29ead1[0];
    for (let _0x230443 of _0x29ead1) {
      if (_0x2944f2.includes(_0x230443)) {
        _0x38cca1 = _0x230443;
        break;
      }
    }
    for (let _0x4adfec of _0x2944f2.split(_0x38cca1).filter(_0x4b3806 => !!_0x4b3806)) {
      _0x43fc94.push(new _0x58be19(_0x4adfec));
    }
  }
  _0x1596df = _0x43fc94.length;
  if (!_0x1596df) {
    console.log("未找到CK，请检查变量" + _0x2bcf7f.join("或"));
    return false;
  }
  console.log("共找到" + _0x1596df + "个账号");
  return true;
}
async function _0x4da6df(_0x58789e = 0) {
  let _0x4e2ba5 = false;
  try {
    const _0x2a7c0c = {
      url: _0x439def,
      timeout: 5000
    };
    let _0x34d6eb = null,
      _0x3d91ea = await _0x56b20b("get", _0x2a7c0c);
    if (_0x3d91ea.err) {
      console.log("服务器错误[" + _0x3d91ea?.["resp"]?.["statusCode"] + "]，重试...");
    } else {
      try {
        typeof _0x3d91ea.resp.body === "object" ? _0x34d6eb = _0x3d91ea.resp.body : _0x34d6eb = JSON.parse(_0x3d91ea.resp.body);
        _0x34d6eb = JSON.parse(_0x34d6eb.data.file.data);
      } catch (_0x6c56b) {
        console.log(_0x6c56b);
      }
    }
    if (!_0x34d6eb) {
      if (_0x58789e < _0x2509fc) {
        _0x4e2ba5 = await _0x4da6df(++_0x58789e);
      }
    } else {
      _0x34d6eb?.["commonNotify"] && _0x34d6eb.commonNotify.length > 0 && _0x347eb6.logAndNotify(_0x34d6eb.commonNotify.join("\n") + "\n", false);
      _0x34d6eb?.["commonMsg"] && _0x34d6eb.commonMsg.length > 0 && console.log(_0x34d6eb.commonMsg.join("\n") + "\n");
      if (_0x34d6eb[_0x2a9b1c]) {
        let _0x3edac0 = _0x34d6eb[_0x2a9b1c];
        _0x3edac0.status == 0 ? _0x17f8a9 >= _0x3edac0.version ? (_0x4e2ba5 = true, console.log(_0x3edac0.msg[_0x3edac0.status]), console.log(_0x3edac0.updateMsg), console.log("现在运行的脚本版本是：" + _0x17f8a9 + "，最新脚本版本：" + _0x3edac0.latestVersion)) : console.log(_0x3edac0.versionMsg) : console.log(_0x3edac0.msg[_0x3edac0.status]);
      } else {
        console.log(_0x34d6eb.errorMsg);
      }
    }
  } catch (_0x4ca109) {
    console.log(_0x4ca109);
  } finally {
    return Promise.resolve(_0x4e2ba5);
  }
}
async function _0x56b20b(_0x4b5197, _0x399f99) {
  return new Promise(_0x241402 => {
    _0x347eb6.send(_0x4b5197, _0x399f99, async (_0x353739, _0x4488c3, _0x4848c5) => {
      const _0x5dee6e = {
        err: _0x353739,
        req: _0x4488c3,
        resp: _0x4848c5
      };
      _0x241402(_0x5dee6e);
    });
  });
}
function _0x5618e0(_0x5bff73) {
  function _0x21a105(_0x485c46, _0x32eee6) {
    return _0x485c46 << _0x32eee6 | _0x485c46 >>> 32 - _0x32eee6;
  }
  function _0x483890(_0x49fad6, _0x406fa5) {
    var _0x742b57, _0x5291ed, _0x1a9666, _0x355a78, _0xb8a6a5;
    _0x1a9666 = 2147483648 & _0x49fad6;
    _0x355a78 = 2147483648 & _0x406fa5;
    _0x742b57 = 1073741824 & _0x49fad6;
    _0x5291ed = 1073741824 & _0x406fa5;
    _0xb8a6a5 = (1073741823 & _0x49fad6) + (1073741823 & _0x406fa5);
    return _0x742b57 & _0x5291ed ? 2147483648 ^ _0xb8a6a5 ^ _0x1a9666 ^ _0x355a78 : _0x742b57 | _0x5291ed ? 1073741824 & _0xb8a6a5 ? 3221225472 ^ _0xb8a6a5 ^ _0x1a9666 ^ _0x355a78 : 1073741824 ^ _0xb8a6a5 ^ _0x1a9666 ^ _0x355a78 : _0xb8a6a5 ^ _0x1a9666 ^ _0x355a78;
  }
  function _0x3a272d(_0x244213, _0x5693fa, _0x305c52) {
    return _0x244213 & _0x5693fa | ~_0x244213 & _0x305c52;
  }
  function _0x47fcb7(_0x36ba8f, _0x30a2e0, _0x221583) {
    return _0x36ba8f & _0x221583 | _0x30a2e0 & ~_0x221583;
  }
  function _0x1f3266(_0x5857be, _0x2c017c, _0x18771e) {
    return _0x5857be ^ _0x2c017c ^ _0x18771e;
  }
  function _0x508f2d(_0x189931, _0x8ee2a0, _0x5e3d48) {
    return _0x8ee2a0 ^ (_0x189931 | ~_0x5e3d48);
  }
  function _0x7ea7cd(_0x49c186, _0x7518f6, _0x5595f6, _0x4ddbfb, _0x42e033, _0x382491, _0x5ae760) {
    _0x49c186 = _0x483890(_0x49c186, _0x483890(_0x483890(_0x3a272d(_0x7518f6, _0x5595f6, _0x4ddbfb), _0x42e033), _0x5ae760));
    return _0x483890(_0x21a105(_0x49c186, _0x382491), _0x7518f6);
  }
  function _0x2c47b4(_0x39a664, _0x1fd5bd, _0x3481a3, _0x414b1a, _0x25623e, _0x5a26d5, _0x492675) {
    _0x39a664 = _0x483890(_0x39a664, _0x483890(_0x483890(_0x47fcb7(_0x1fd5bd, _0x3481a3, _0x414b1a), _0x25623e), _0x492675));
    return _0x483890(_0x21a105(_0x39a664, _0x5a26d5), _0x1fd5bd);
  }
  function _0x3a5856(_0x4cc897, _0x138192, _0xdec420, _0x4652a3, _0x1d7272, _0x1483e4, _0x285570) {
    _0x4cc897 = _0x483890(_0x4cc897, _0x483890(_0x483890(_0x1f3266(_0x138192, _0xdec420, _0x4652a3), _0x1d7272), _0x285570));
    return _0x483890(_0x21a105(_0x4cc897, _0x1483e4), _0x138192);
  }
  function _0x4d9c7e(_0x172aee, _0x916654, _0x3185ce, _0x21e6fc, _0x115683, _0xef90e2, _0x183c33) {
    _0x172aee = _0x483890(_0x172aee, _0x483890(_0x483890(_0x508f2d(_0x916654, _0x3185ce, _0x21e6fc), _0x115683), _0x183c33));
    return _0x483890(_0x21a105(_0x172aee, _0xef90e2), _0x916654);
  }
  function _0x598ca9(_0x998501) {
    for (var _0x26db1b, _0x35cceb = _0x998501.length, _0x10f101 = _0x35cceb + 8, _0x2ab146 = (_0x10f101 - _0x10f101 % 64) / 64, _0x3a9482 = 16 * (_0x2ab146 + 1), _0xd26fe8 = new Array(_0x3a9482 - 1), _0x12090a = 0, _0x52cc89 = 0; _0x35cceb > _0x52cc89;) {
      _0x26db1b = (_0x52cc89 - _0x52cc89 % 4) / 4;
      _0x12090a = _0x52cc89 % 4 * 8;
      _0xd26fe8[_0x26db1b] = _0xd26fe8[_0x26db1b] | _0x998501.charCodeAt(_0x52cc89) << _0x12090a;
      _0x52cc89++;
    }
    _0x26db1b = (_0x52cc89 - _0x52cc89 % 4) / 4;
    _0x12090a = _0x52cc89 % 4 * 8;
    _0xd26fe8[_0x26db1b] = _0xd26fe8[_0x26db1b] | 128 << _0x12090a;
    _0xd26fe8[_0x3a9482 - 2] = _0x35cceb << 3;
    _0xd26fe8[_0x3a9482 - 1] = _0x35cceb >>> 29;
    return _0xd26fe8;
  }
  function _0x40308f(_0x269259) {
    var _0x308172,
      _0x53f163,
      _0x505dca = "",
      _0x207961 = "";
    for (_0x53f163 = 0; 3 >= _0x53f163; _0x53f163++) {
      _0x308172 = _0x269259 >>> 8 * _0x53f163 & 255;
      _0x207961 = "0" + _0x308172.toString(16);
      _0x505dca += _0x207961.substr(_0x207961.length - 2, 2);
    }
    return _0x505dca;
  }
  function _0x18d28e(_0x3f4478) {
    _0x3f4478 = _0x3f4478.replace(/\r\n/g, "\n");
    for (var _0x5e8686 = "", _0x55abb0 = 0; _0x55abb0 < _0x3f4478.length; _0x55abb0++) {
      var _0x4635b3 = _0x3f4478.charCodeAt(_0x55abb0);
      128 > _0x4635b3 ? _0x5e8686 += String.fromCharCode(_0x4635b3) : _0x4635b3 > 127 && 2048 > _0x4635b3 ? (_0x5e8686 += String.fromCharCode(_0x4635b3 >> 6 | 192), _0x5e8686 += String.fromCharCode(63 & _0x4635b3 | 128)) : (_0x5e8686 += String.fromCharCode(_0x4635b3 >> 12 | 224), _0x5e8686 += String.fromCharCode(_0x4635b3 >> 6 & 63 | 128), _0x5e8686 += String.fromCharCode(63 & _0x4635b3 | 128));
    }
    return _0x5e8686;
  }
  var _0x2689df,
    _0x3fdd8b,
    _0x3385b2,
    _0x5d53c2,
    _0x25d099,
    _0x3a1b69,
    _0x1ad0de,
    _0x47d9c1,
    _0x202c69,
    _0x42331e = [],
    _0x26552a = 7,
    _0xb14b29 = 12,
    _0x43963e = 17,
    _0x40e6fa = 22,
    _0x3c7a12 = 5,
    _0x3d8c4e = 9,
    _0x8963bc = 14,
    _0x2e05a8 = 20,
    _0x18bb1b = 4,
    _0x2ee738 = 11,
    _0x1af09e = 16,
    _0x3c121e = 23,
    _0x54d843 = 6,
    _0x116fd2 = 10,
    _0x37a85c = 15,
    _0x5d3e38 = 21;
  for (_0x5bff73 = _0x18d28e(_0x5bff73), _0x42331e = _0x598ca9(_0x5bff73), _0x3a1b69 = 1732584193, _0x1ad0de = 4023233417, _0x47d9c1 = 2562383102, _0x202c69 = 271733878, _0x2689df = 0; _0x2689df < _0x42331e.length; _0x2689df += 16) {
    _0x3fdd8b = _0x3a1b69;
    _0x3385b2 = _0x1ad0de;
    _0x5d53c2 = _0x47d9c1;
    _0x25d099 = _0x202c69;
    _0x3a1b69 = _0x7ea7cd(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 0], _0x26552a, 3614090360);
    _0x202c69 = _0x7ea7cd(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 1], _0xb14b29, 3905402710);
    _0x47d9c1 = _0x7ea7cd(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 2], _0x43963e, 606105819);
    _0x1ad0de = _0x7ea7cd(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 3], _0x40e6fa, 3250441966);
    _0x3a1b69 = _0x7ea7cd(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 4], _0x26552a, 4118548399);
    _0x202c69 = _0x7ea7cd(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 5], _0xb14b29, 1200080426);
    _0x47d9c1 = _0x7ea7cd(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 6], _0x43963e, 2821735955);
    _0x1ad0de = _0x7ea7cd(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 7], _0x40e6fa, 4249261313);
    _0x3a1b69 = _0x7ea7cd(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 8], _0x26552a, 1770035416);
    _0x202c69 = _0x7ea7cd(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 9], _0xb14b29, 2336552879);
    _0x47d9c1 = _0x7ea7cd(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 10], _0x43963e, 4294925233);
    _0x1ad0de = _0x7ea7cd(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 11], _0x40e6fa, 2304563134);
    _0x3a1b69 = _0x7ea7cd(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 12], _0x26552a, 1804603682);
    _0x202c69 = _0x7ea7cd(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 13], _0xb14b29, 4254626195);
    _0x47d9c1 = _0x7ea7cd(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 14], _0x43963e, 2792965006);
    _0x1ad0de = _0x7ea7cd(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 15], _0x40e6fa, 1236535329);
    _0x3a1b69 = _0x2c47b4(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 1], _0x3c7a12, 4129170786);
    _0x202c69 = _0x2c47b4(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 6], _0x3d8c4e, 3225465664);
    _0x47d9c1 = _0x2c47b4(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 11], _0x8963bc, 643717713);
    _0x1ad0de = _0x2c47b4(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 0], _0x2e05a8, 3921069994);
    _0x3a1b69 = _0x2c47b4(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 5], _0x3c7a12, 3593408605);
    _0x202c69 = _0x2c47b4(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 10], _0x3d8c4e, 38016083);
    _0x47d9c1 = _0x2c47b4(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 15], _0x8963bc, 3634488961);
    _0x1ad0de = _0x2c47b4(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 4], _0x2e05a8, 3889429448);
    _0x3a1b69 = _0x2c47b4(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 9], _0x3c7a12, 568446438);
    _0x202c69 = _0x2c47b4(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 14], _0x3d8c4e, 3275163606);
    _0x47d9c1 = _0x2c47b4(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 3], _0x8963bc, 4107603335);
    _0x1ad0de = _0x2c47b4(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 8], _0x2e05a8, 1163531501);
    _0x3a1b69 = _0x2c47b4(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 13], _0x3c7a12, 2850285829);
    _0x202c69 = _0x2c47b4(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 2], _0x3d8c4e, 4243563512);
    _0x47d9c1 = _0x2c47b4(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 7], _0x8963bc, 1735328473);
    _0x1ad0de = _0x2c47b4(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 12], _0x2e05a8, 2368359562);
    _0x3a1b69 = _0x3a5856(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 5], _0x18bb1b, 4294588738);
    _0x202c69 = _0x3a5856(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 8], _0x2ee738, 2272392833);
    _0x47d9c1 = _0x3a5856(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 11], _0x1af09e, 1839030562);
    _0x1ad0de = _0x3a5856(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 14], _0x3c121e, 4259657740);
    _0x3a1b69 = _0x3a5856(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 1], _0x18bb1b, 2763975236);
    _0x202c69 = _0x3a5856(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 4], _0x2ee738, 1272893353);
    _0x47d9c1 = _0x3a5856(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 7], _0x1af09e, 4139469664);
    _0x1ad0de = _0x3a5856(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 10], _0x3c121e, 3200236656);
    _0x3a1b69 = _0x3a5856(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 13], _0x18bb1b, 681279174);
    _0x202c69 = _0x3a5856(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 0], _0x2ee738, 3936430074);
    _0x47d9c1 = _0x3a5856(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 3], _0x1af09e, 3572445317);
    _0x1ad0de = _0x3a5856(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 6], _0x3c121e, 76029189);
    _0x3a1b69 = _0x3a5856(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 9], _0x18bb1b, 3654602809);
    _0x202c69 = _0x3a5856(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 12], _0x2ee738, 3873151461);
    _0x47d9c1 = _0x3a5856(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 15], _0x1af09e, 530742520);
    _0x1ad0de = _0x3a5856(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 2], _0x3c121e, 3299628645);
    _0x3a1b69 = _0x4d9c7e(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 0], _0x54d843, 4096336452);
    _0x202c69 = _0x4d9c7e(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 7], _0x116fd2, 1126891415);
    _0x47d9c1 = _0x4d9c7e(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 14], _0x37a85c, 2878612391);
    _0x1ad0de = _0x4d9c7e(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 5], _0x5d3e38, 4237533241);
    _0x3a1b69 = _0x4d9c7e(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 12], _0x54d843, 1700485571);
    _0x202c69 = _0x4d9c7e(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 3], _0x116fd2, 2399980690);
    _0x47d9c1 = _0x4d9c7e(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 10], _0x37a85c, 4293915773);
    _0x1ad0de = _0x4d9c7e(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 1], _0x5d3e38, 2240044497);
    _0x3a1b69 = _0x4d9c7e(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 8], _0x54d843, 1873313359);
    _0x202c69 = _0x4d9c7e(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 15], _0x116fd2, 4264355552);
    _0x47d9c1 = _0x4d9c7e(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 6], _0x37a85c, 2734768916);
    _0x1ad0de = _0x4d9c7e(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 13], _0x5d3e38, 1309151649);
    _0x3a1b69 = _0x4d9c7e(_0x3a1b69, _0x1ad0de, _0x47d9c1, _0x202c69, _0x42331e[_0x2689df + 4], _0x54d843, 4149444226);
    _0x202c69 = _0x4d9c7e(_0x202c69, _0x3a1b69, _0x1ad0de, _0x47d9c1, _0x42331e[_0x2689df + 11], _0x116fd2, 3174756917);
    _0x47d9c1 = _0x4d9c7e(_0x47d9c1, _0x202c69, _0x3a1b69, _0x1ad0de, _0x42331e[_0x2689df + 2], _0x37a85c, 718787259);
    _0x1ad0de = _0x4d9c7e(_0x1ad0de, _0x47d9c1, _0x202c69, _0x3a1b69, _0x42331e[_0x2689df + 9], _0x5d3e38, 3951481745);
    _0x3a1b69 = _0x483890(_0x3a1b69, _0x3fdd8b);
    _0x1ad0de = _0x483890(_0x1ad0de, _0x3385b2);
    _0x47d9c1 = _0x483890(_0x47d9c1, _0x5d53c2);
    _0x202c69 = _0x483890(_0x202c69, _0x25d099);
  }
  var _0x2398ec = _0x40308f(_0x3a1b69) + _0x40308f(_0x1ad0de) + _0x40308f(_0x47d9c1) + _0x40308f(_0x202c69);
  return _0x2398ec.toLowerCase();
}
function _0x1ce1ec(_0x5be4c5, _0x52df27) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x489bf3, _0x2fa385) {
      this.name = _0x489bf3;
      this.notifyStr = "";
      this.notifyFlag = false;
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2fa385);
      console.log(this.name + " 开始运行：\n");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(_0x2b11f4) {
      let _0x5e0206 = this.getval(_0x2b11f4);
      if (/^@/.test(_0x2b11f4)) {
        const [, _0x52b3d2, _0x313b66] = /^@(.*?)\.(.*?)$/.exec(_0x2b11f4),
          _0x453614 = _0x52b3d2 ? this.getval(_0x52b3d2) : "";
        if (_0x453614) {
          try {
            const _0x24e0ea = JSON.parse(_0x453614);
            _0x5e0206 = _0x24e0ea ? this.lodash_get(_0x24e0ea, _0x313b66, "") : _0x5e0206;
          } catch (_0x4c9fb8) {
            _0x5e0206 = "";
          }
        }
      }
      return _0x5e0206;
    }
    setdata(_0xf14bb3, _0x5ef996) {
      let _0x315093 = !1;
      if (/^@/.test(_0x5ef996)) {
        const [, _0x30b70e, _0x302881] = /^@(.*?)\.(.*?)$/.exec(_0x5ef996),
          _0x4a2776 = this.getval(_0x30b70e),
          _0x126890 = _0x30b70e ? "null" === _0x4a2776 ? null : _0x4a2776 || "{}" : "{}";
        try {
          const _0x1a861e = JSON.parse(_0x126890);
          this.lodash_set(_0x1a861e, _0x302881, _0xf14bb3);
          _0x315093 = this.setval(JSON.stringify(_0x1a861e), _0x30b70e);
        } catch (_0x5e8e0a) {
          const _0xee0ef = {};
          this.lodash_set(_0xee0ef, _0x302881, _0xf14bb3);
          _0x315093 = this.setval(JSON.stringify(_0xee0ef), _0x30b70e);
        }
      } else {
        _0x315093 = this.setval(_0xf14bb3, _0x5ef996);
      }
      return _0x315093;
    }
    getval(_0x1dd4ab) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1dd4ab) : this.isQuanX() ? $prefs.valueForKey(_0x1dd4ab) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1dd4ab]) : this.data && this.data[_0x1dd4ab] || null;
    }
    setval(_0x31b9eb, _0x7be205) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x31b9eb, _0x7be205) : this.isQuanX() ? $prefs.setValueForKey(_0x31b9eb, _0x7be205) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x7be205] = _0x31b9eb, this.writedata(), !0) : this.data && this.data[_0x7be205] || null;
    }
    send(_0x468976, _0x21faf7, _0x29871e = () => {}) {
      if (_0x468976 != "get" && _0x468976 != "post" && _0x468976 != "put" && _0x468976 != "delete") {
        console.log("无效的http方法：" + _0x468976);
        return;
      }
      if (_0x468976 == "get" && _0x21faf7.headers) {
        delete _0x21faf7.headers["Content-Type"];
        delete _0x21faf7.headers["Content-Length"];
      } else {
        if (_0x21faf7.body && _0x21faf7.headers) {
          if (!_0x21faf7.headers["Content-Type"]) {
            _0x21faf7.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x21faf7.headers = _0x21faf7.headers || {};
          const _0x51498a = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0x21faf7.headers, _0x51498a);
        }
        const _0x15e022 = {
          method: _0x468976,
          url: _0x21faf7.url,
          headers: _0x21faf7.headers,
          timeout: _0x21faf7.timeout,
          data: _0x21faf7.body
        };
        if (_0x468976 == "get") {
          delete _0x15e022.data;
        }
        $axios(_0x15e022).then(_0x253df0 => {
          const {
              status: _0x32e544,
              request: _0x204ebf,
              headers: _0x48d441,
              data: _0x994c63
            } = _0x253df0,
            _0x54755a = {
              statusCode: _0x32e544,
              headers: _0x48d441,
              body: _0x994c63
            };
          _0x29871e(null, _0x204ebf, _0x54755a);
        }).catch(_0x277415 => console.log(_0x277415));
      } else {
        if (this.isQuanX()) {
          const _0x1776b3 = {
            hints: !1
          };
          _0x21faf7.method = _0x468976.toUpperCase();
          _0x21faf7.opts = _0x21faf7.opts || {};
          this.isNeedRewrite && Object.assign(_0x21faf7.opts, _0x1776b3);
          const _0x4e7345 = {
            redirect: "manual"
          };
          Object.assign(_0x21faf7.opts, _0x4e7345);
          $task.fetch(_0x21faf7).then(_0x26ab5c => {
            const {
                statusCode: _0x3ef6cd,
                request: _0x1ab7f0,
                headers: _0x10a0bb,
                body: _0x3608c9
              } = _0x26ab5c,
              _0x36b373 = {
                statusCode: _0x3ef6cd,
                headers: _0x10a0bb,
                body: _0x3608c9
              };
            _0x29871e(null, _0x1ab7f0, _0x36b373);
          }, _0x5a8898 => _0x29871e(_0x5a8898));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0x908fc3,
                ..._0x55b651
              } = _0x21faf7,
              _0x2fb746 = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0x2fb746);
            this.instance[_0x468976](_0x908fc3, _0x55b651).then(_0x5d7b7f => {
              const {
                  statusCode: _0x2bdac4,
                  request: _0x46ef84,
                  headers: _0x128f6f,
                  body: _0xbf0ba6
                } = _0x5d7b7f,
                _0x263e08 = {
                  statusCode: _0x2bdac4,
                  headers: _0x128f6f,
                  body: _0xbf0ba6
                };
              _0x29871e(null, _0x46ef84, _0x263e08);
            }, _0x756168 => {
              const {
                message: _0x578692,
                request: _0x129e56,
                response: _0x5b905f
              } = _0x756168;
              _0x29871e(_0x578692, _0x129e56, _0x5b905f);
            });
          }
        }
      }
    }
    time(_0x1a8d5e, _0xb171db = null) {
      let _0x55305f = _0xb171db ? new Date(_0xb171db) : new Date(),
        _0x5352c6 = {
          "M+": _0x55305f.getMonth() + 1,
          "d+": _0x55305f.getDate(),
          "h+": _0x55305f.getHours(),
          "m+": _0x55305f.getMinutes(),
          "s+": _0x55305f.getSeconds(),
          "q+": Math.floor((_0x55305f.getMonth() + 3) / 3),
          S: this.padStr(_0x55305f.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x1a8d5e) && (_0x1a8d5e = _0x1a8d5e.replace(RegExp.$1, (_0x55305f.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x79c7e2 in _0x5352c6) new RegExp("(" + _0x79c7e2 + ")").test(_0x1a8d5e) && (_0x1a8d5e = _0x1a8d5e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5352c6[_0x79c7e2] : ("00" + _0x5352c6[_0x79c7e2]).substr(("" + _0x5352c6[_0x79c7e2]).length)));
      return _0x1a8d5e;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr) {
        return;
      }
      let _0x3bce0f = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x347eb6.isNode()) {
        var _0x452b4d = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x452b4d.sendNotify(this.name, _0x3bce0f);
      } else {
        this.msg(_0x3bce0f);
      }
    }
    logAndNotify(_0x3db738, _0x1d38b7 = true) {
      if (_0x1d38b7) {
        this.notifyFlag = true;
      }
      console.log(_0x3db738);
      this.notifyStr += _0x3db738;
      this.notifyStr += "\n";
    }
    logAndNotifyWithTime(_0x45c51f, _0x56a389 = true) {
      if (_0x56a389) {
        this.notifyFlag = true;
      }
      let _0x49e78f = "[" + this.time("hh:mm:ss.S") + "]" + _0x45c51f;
      console.log(_0x49e78f);
      this.notifyStr += _0x49e78f;
      this.notifyStr += "\n";
    }
    logWithTime(_0x377122) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x377122);
    }
    msg(_0xffe775 = t, _0x1a1288 = "", _0x376313 = "", _0x2da8df) {
      const _0x4744db = _0x58cd2f => {
        if (!_0x58cd2f) {
          return _0x58cd2f;
        }
        if ("string" == typeof _0x58cd2f) {
          return this.isLoon() ? _0x58cd2f : this.isQuanX() ? {
            "open-url": _0x58cd2f
          } : this.isSurge() ? {
            url: _0x58cd2f
          } : void 0;
        }
        if ("object" == typeof _0x58cd2f) {
          if (this.isLoon()) {
            let _0x5e3bf9 = _0x58cd2f.openUrl || _0x58cd2f.url || _0x58cd2f["open-url"],
              _0x65cbf8 = _0x58cd2f.mediaUrl || _0x58cd2f["media-url"];
            const _0x4e6853 = {
              openUrl: _0x5e3bf9,
              mediaUrl: _0x65cbf8
            };
            return _0x4e6853;
          }
          if (this.isQuanX()) {
            let _0x51c10b = _0x58cd2f["open-url"] || _0x58cd2f.url || _0x58cd2f.openUrl,
              _0x3ef382 = _0x58cd2f["media-url"] || _0x58cd2f.mediaUrl;
            const _0x49495a = {
              "open-url": _0x51c10b,
              "media-url": _0x3ef382
            };
            return _0x49495a;
          }
          if (this.isSurge()) {
            let _0x445817 = _0x58cd2f.url || _0x58cd2f.openUrl || _0x58cd2f["open-url"];
            const _0x5df199 = {
              url: _0x445817
            };
            return _0x5df199;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0xffe775, _0x1a1288, _0x376313, _0x4744db(_0x2da8df)) : this.isQuanX() && $notify(_0xffe775, _0x1a1288, _0x376313, _0x4744db(_0x2da8df)));
      let _0x2a5c61 = ["", "============== 系统通知 =============="];
      _0x2a5c61.push(_0xffe775);
      _0x1a1288 && _0x2a5c61.push(_0x1a1288);
      _0x376313 && _0x2a5c61.push(_0x376313);
      console.log(_0x2a5c61.join("\n"));
    }
    getMin(_0x3ac66f, _0x160210) {
      return _0x3ac66f < _0x160210 ? _0x3ac66f : _0x160210;
    }
    getMax(_0x770508, _0x54a9d4) {
      return _0x770508 < _0x54a9d4 ? _0x54a9d4 : _0x770508;
    }
    padStr(_0x300153, _0x3b8371, _0x4ee002 = "0") {
      let _0x1d99a3 = String(_0x300153),
        _0x199c68 = _0x3b8371 > _0x1d99a3.length ? _0x3b8371 - _0x1d99a3.length : 0,
        _0x321e89 = "";
      for (let _0x28be24 = 0; _0x28be24 < _0x199c68; _0x28be24++) {
        _0x321e89 += _0x4ee002;
      }
      _0x321e89 += _0x1d99a3;
      return _0x321e89;
    }
    json2str(_0x559e29, _0x252125, _0x1ded19 = false) {
      let _0x44e54b = [];
      for (let _0x5b4ad7 of Object.keys(_0x559e29).sort()) {
        let _0x40275f = _0x559e29[_0x5b4ad7];
        if (_0x40275f && _0x1ded19) {
          _0x40275f = encodeURIComponent(_0x40275f);
        }
        _0x44e54b.push(_0x5b4ad7 + "=" + _0x40275f);
      }
      return _0x44e54b.join(_0x252125);
    }
    str2json(_0x374aa7, _0x287cdf = false) {
      let _0x1596d6 = {};
      for (let _0x206794 of _0x374aa7.split("&")) {
        if (!_0x206794) {
          continue;
        }
        let _0x5b8966 = _0x206794.indexOf("=");
        if (_0x5b8966 == -1) {
          continue;
        }
        let _0x29cb87 = _0x206794.substr(0, _0x5b8966),
          _0x51eb89 = _0x206794.substr(_0x5b8966 + 1);
        if (_0x287cdf) {
          _0x51eb89 = decodeURIComponent(_0x51eb89);
        }
        _0x1596d6[_0x29cb87] = _0x51eb89;
      }
      return _0x1596d6;
    }
    randomPattern(_0x3fc6a8, _0x3e661d = "abcdef0123456789") {
      let _0x2a9855 = "";
      for (let _0x3faec4 of _0x3fc6a8) {
        if (_0x3faec4 == "x") {
          _0x2a9855 += _0x3e661d.charAt(Math.floor(Math.random() * _0x3e661d.length));
        } else {
          _0x3faec4 == "X" ? _0x2a9855 += _0x3e661d.charAt(Math.floor(Math.random() * _0x3e661d.length)).toUpperCase() : _0x2a9855 += _0x3faec4;
        }
      }
      return _0x2a9855;
    }
    randomString(_0x169cce, _0x59808c = "abcdef0123456789") {
      let _0x190a53 = "";
      for (let _0x142603 = 0; _0x142603 < _0x169cce; _0x142603++) {
        _0x190a53 += _0x59808c.charAt(Math.floor(Math.random() * _0x59808c.length));
      }
      return _0x190a53;
    }
    randomList(_0x2b8c71) {
      let _0x1c5e41 = Math.floor(Math.random() * _0x2b8c71.length);
      return _0x2b8c71[_0x1c5e41];
    }
    wait(_0x50b7a1) {
      return new Promise(_0x1f4e38 => setTimeout(_0x1f4e38, _0x50b7a1));
    }
    async done(_0xaa1c4d = {}) {
      await this.showmsg();
      const _0x4a6c70 = new Date().getTime(),
        _0x56ab97 = (_0x4a6c70 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x56ab97 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0xaa1c4d);
      }
    }
  }(_0x5be4c5, _0x52df27);
}