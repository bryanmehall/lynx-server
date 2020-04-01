{
  webserver =
    { config, pkgs, ... }:
    let
      # We import our custom packages from ./default passing pkgs as argument
      nodePackages = import ./default.nix { pkgs = pkgs; };
      IP_ADDRESS = "192.168.56.101"; #"https://lynxlang.org"
      PORT = "3000";
    in { 
      services = {
        nginx = {
          enable = true;
          #TODO: add proxy caching to nginx for content addressed objects
          virtualHosts.IP_ADDRESS = { # add this as virtualhost to nginx
            #forceSSL = true;    # force redirect from port 80 to port 443 with 301 redirect
            #enableACME = true;  # use Let's Encrypt to sign certificate for this vhost
            #root = "/home/bryan/lynx/build/index.html";
            locations."/" = {
              proxyPass = "http://127.0.0.1:${PORT}";
              extraConfig = 
                # required when the target is also TLS server with multiple hosts
                "proxy_ssl_server_name on;" +
                #"types_hash_max_size 4096" +
                # required when the server wants to use HTTP Authentication
                "proxy_pass_header Authorization;";
            };
          };
        };
      };
      #config settings for lynx server running in systemd daemon
      systemd.services.lynxserver = {
        description = "lynx webserver";
        after = [ "network.target" ];         # start the service after the network is available
        wantedBy = [ "multi-user.target" ];
        environment = { 
          PORT = PORT;
          NODE_ENV = "production";
        };
        serviceConfig = {
          ExecStart = "${nodePackages.package}/bin/lynx-server";
          User = "nodejs"; #run as nodejs user to prevent root access
          Restart = "on-failure";
        };
      };
      users.extraUsers = { #add users for server, 
        nodejs = { };
      };
      networking.firewall.allowedTCPPorts = [ 80 443 ];
      #security.acme.acceptTerms = true; # required to enable ACME in nginx
      #security.acme.certs = {
        # "https://lynxlang.org".email = "bryanmehall@gmail.com";
      #};
    };
    
}