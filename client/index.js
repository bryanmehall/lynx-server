/*make lightweight lynx modules for web worker messages, webgl, webassembly, http connections, server sent events, websockets, webrtc where the input is on one platform and the output is on another. handle errors for any of these connections that can fail. any event with an address outside of the local machine is routed through a lynx module that combines the networking lynx modules and dynamically adjusts which method to use by weighing:
-packet loss (websockets, http, server sent events)
-connection overhead (setup and continuous)
-latency (web sockets, webRtc)
-directionality (server push, client pull, peer to peer)
-bulk data(http streams? and webRTC vs high frequency with web sockets/rebRTC)*/