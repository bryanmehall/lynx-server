{
  network.description = "Web server";

  webserver =
    { config, pkgs, ... }:
    { services.httpd.enable = true;
      services.httpd.adminAddr = "bryanmehall@gmail.com";
      networking.firewall.allowedTCPPorts = [ 80 ];
    };
}