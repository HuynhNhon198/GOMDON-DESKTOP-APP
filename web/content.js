console.log("content");
var ports;
const read_data_from_port = () => {
  eel.read_data_serial()(data => {
    if (data !== "") {
      $(".scan div.results").append(`<li class="list-group-item"><i class="material-icons before">
      arrow_forward
      </i><span>${data}</span></li>`);
    }
    read_data_from_port();
  });
};

const open_port = port => {
  $("#loading").show();
  eel.close_port()(() => {
    setTimeout(() => {
      eel.open_port(port)(data => {
        console.log(data);
        if (data.err == "") {
          $("span.open-p").text(data.port);
          localStorage.setItem("df_port", port);
          read_data_from_port();
          $("#loading").hide();
        } else {
          alert(data.err);
          $("#loading").hide();
        }
      });
    }, 1000);
  });
};

const getPort = () => {
  return new Promise(r => {
    eel.get_ports()(data => {
      console.log(data);
        $(".ports").html("");
      if (data.length > 0) {
        ports = data;
        data.forEach(port => {
          $(".ports").append(
            `<option value="${port.port}">${port.port} - ${port.desc}</option>`
          );
        });
        $(".ports").val("");
        $(".ports").change(function(e) {
          open_port($(this).val());
        });
      }
      r(data.length);
    });
  });
};

getPort().then(len => {
  set_port_save(len);
}); 

const set_port_save = len => {
  if (len > 0) {
    const default_port = localStorage.getItem("df_port");
    console.log(default_port);

    if (default_port !== null) {
      const ind = ports.findIndex(x => x.port == default_port);
      if (ind !== -1) {
        open_port(default_port);
        $(".ports").val(ports[ind].port);
      }
    }
  }
};

$("ul.float-left li").click(function(e) {
  $("ul.float-left li").attr("class", "nav-item");
  $(this).addClass("active");
});

$("span.clear").click(function(e) {
  $("div.results").html("");
});

$("i.reload-ports").click(() => getPort().then(len => set_port_save(len)));
