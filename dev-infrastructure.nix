{
  network.description = "Lynx webserver";

  webserver =
    { config, pkgs, ... }:
    { deployment.targetEnv = "virtualbox";
      deployment.virtualbox = {
        memorySize = 1024; # megabytes
        vcpu = 2; # number of cpus
        headless = true; # run virtualbox without graphical process
      };
    };
}