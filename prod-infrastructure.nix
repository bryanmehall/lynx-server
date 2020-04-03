# from https://www.reddit.com/r/NixOS/comments/eef05h/is_there_an_outofthebox_nixos_custom_image_for/
{
    network.description = "Lynx webserver";
    webserver =
        { config, pkgs, ... }:
        { deployment.targetEnv = "virtualbox"; # just do target host? 
        deployment.virtualbox = {
            memorySize = 1024; # megabytes
            vcpu = 2; # number of cpus
            headless = true; # run virtualbox without graphical process
        };
    };
}