console.log("content");
var ports;
const read_data_from_port = () => {
  eel.read_data_serial()(data => {
    if (data !== "") {
      $(".scan div.results").append(`<li class="list-group-item">${data}</li>`);
    }
    read_data_from_port();
  });
};

const open_port = port => {
  $("#loading").show();
  eel.close_port()(() => {
    setTimeout(() => {
      eel.open_port(port)(data => {
        $("span.open-p").text(data);
        localStorage.setItem("df_port", port);
        read_data_from_port();
        $("#loading").hide();
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
          $(".ports").append(`<option>${port}</option>`);
        });
        $(".ports").click(function(e) {
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
    if (default_port !== null) {
      if (ports.includes(default_port)) open_port(default_port);
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
