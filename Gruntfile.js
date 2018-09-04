module.exports = function(grunt) {
    var path = require("path");

    var source = "src/";
    source = source.replace(/\//g, path.sep);

    var framework = source + "framework/";
    framework = framework.replace(/\//g, path.sep);

    var frameworkCore = framework + "core/";
    frameworkCore = frameworkCore.replace(/\//g, path.sep);

    var frameworkServer = framework + "server/";
    frameworkServer = frameworkServer.replace(/\//g, path.sep);

    var frameworkWebClient = framework + "webclient/";
    frameworkWebClient = frameworkWebClient.replace(/\//g, path.sep);

    var frameworkMobile = framework + "mobile/";
    frameworkMobile = frameworkMobile.replace(/\//g, path.sep);

    var main = source + "main/";
    main = main.replace(/\//g, path.sep);

    var mainCommon = main + "common/";
    mainCommon = mainCommon.replace(/\//g, path.sep);

    var mainClientCommon = main + "clientcommon/";
    mainClientCommon = mainClientCommon.replace(/\//g, path.sep);

    var mainServer = main + "server/";
    mainServer = mainServer.replace(/\//g, path.sep);

    var mainWebClient = main + "webclient/";
    mainWebClient = mainWebClient.replace(/\//g, path.sep);

    var mainWebClientStyles = mainWebClient + "public/styles/";
    mainWebClientStyles = mainWebClientStyles.replace(/\//g, path.sep);

    var mainWebClientLess = mainWebClientStyles + "less/";
    mainWebClientLess = mainWebClientLess.replace(/\//g, path.sep);

    var mainWebClientCss = mainWebClientStyles + "css/";
    mainWebClientCss = mainWebClientCss.replace(/\//g, path.sep);

    var mainWebClientImages = mainWebClient + "public/images/";
    mainWebClientImages = mainWebClientImages.replace(/\//g, path.sep);

    var mainWebClientScripts = mainWebClient + "public/scripts/";
    mainWebClientScripts = mainWebClientScripts.replace(/\//g, path.sep);

    var mainWebClientFonts = mainWebClient + "public/fonts/";
    mainWebClientFonts = mainWebClientFonts.replace(/\//g, path.sep);

    var mainWebClientViews = mainWebClient + "public/views/";
    mainWebClientViews = mainWebClientViews.replace(/\//g, path.sep);

    var mainMobile = main + "mobile/";
    mainMobile = mainMobile.replace(/\//g, path.sep);

    var mainMobileStyles = mainMobile + "assets/styles/";
    mainMobileStyles = mainMobileStyles.replace(/\//g, path.sep);

    var mainMobileLess = mainMobileStyles + "less/";
    mainMobileLess = mainMobileLess.replace(/\//g, path.sep);

    var mainMobileCss = mainMobileStyles + "css/";
    mainMobileCss = mainMobileCss.replace(/\//g, path.sep);

    var mainMobileImages = mainMobile + "assets/images/";
    mainMobileImages = mainMobileImages.replace(/\//g, path.sep);

    var mainMobileScripts = mainMobile + "assets/scripts/";
    mainMobileScripts = mainMobileScripts.replace(/\//g, path.sep);

    var mainMobileFonts = mainMobile + "assets/fonts/";
    mainMobileFonts = mainMobileFonts.replace(/\//g, path.sep);

    var mainMobileViews = mainMobile + "assets/views/";
    mainMobileViews = mainMobileViews.replace(/\//g, path.sep);

    var mainMobileAudios = mainMobile + "assets/audios/";
    mainMobileAudios = mainMobileAudios.replace(/\//g, path.sep);

    var sourceServer = [
        frameworkCore + "**/*.ts",
        frameworkServer + "**/*.ts",
        mainCommon + "**/*.ts",
        mainServer + "**/*.ts"
    ];

    var sourceWebClient = [
        source + "global.d.ts",
        frameworkCore + "**/*.ts",
        frameworkWebClient + "**/*.ts",
        mainCommon + "**/*.ts",
        mainClientCommon + "**/*.ts",
        mainWebClient + "**/*.ts"
    ];

    var sourceMobile = [
        source + "global.d.ts",
        frameworkCore + "**/*.ts",
        frameworkWebClient + "**/*.ts",
        frameworkMobile + "**/*.ts",
        mainCommon + "**/*.ts",
        mainClientCommon + "**/*.ts",
        mainMobile + "**/*.ts",
    ];

    var build = "build/";
    build = build.replace(/\//g, path.sep);

    var buildWWW = build + "www/";
    buildWWW = buildWWW.replace(/\//g, path.sep);

    var buildServer = buildWWW + "server/";
    buildServer = buildServer.replace(/\//g, path.sep);

    var buildStyles = buildWWW + "webclient/public/styles/";
    buildStyles = buildStyles.replace(/\//g, path.sep);

    var buildImages = buildWWW + "webclient/public/images/";
    buildImages = buildImages.replace(/\//g, path.sep);

    var buildScripts = buildWWW + "webclient/public/scripts/";
    buildScripts = buildScripts.replace(/\//g, path.sep);

    var buildFonts = buildWWW + "webclient/public/fonts/";
    buildFonts = buildFonts.replace(/\//g, path.sep);

    var buildViews = buildWWW + "webclient/public/views/";
    buildViews = buildViews.replace(/\//g, path.sep);

    var buildIonic = mainMobile + "ionic/";
    buildIonic = buildIonic.replace(/\//g, path.sep);

    var buildIonicWWW = buildIonic + "www/";
    buildIonicWWW = buildIonicWWW.replace(/\//g, path.sep);

    var buildMobileStyles = buildIonicWWW + "assets/styles/";
    buildMobileStyles = buildMobileStyles.replace(/\//g, path.sep);

    var buildMobileImages = buildIonicWWW + "assets/images/";
    buildMobileImages = buildMobileImages.replace(/\//g, path.sep);

    var buildMobileScripts = buildIonicWWW + "assets/scripts/";
    buildMobileScripts = buildMobileScripts.replace(/\//g, path.sep);

    var buildMobileFonts = buildIonicWWW + "assets/fonts/";
    buildMobileFonts = buildMobileFonts.replace(/\//g, path.sep);

    var buildMobileViews = buildIonicWWW + "assets/views/";
    buildMobileViews = buildMobileViews.replace(/\//g, path.sep);

    var buildMobileAudios = buildIonicWWW + "assets/audios/";
    buildMobileAudios = buildMobileAudios.replace(/\//g, path.sep);

    grunt.initConfig({
        package: grunt.file.readJSON("package.json"),
        less: {
            webClient: {
                files: [{
                    expand: true,
                    cwd: mainWebClientLess,
                    src: ["**/*.less"],
                    dest: buildStyles,
                    ext: ".css"
                }]
            },
            mobile: {
                files: [{
                    expand: true,
                    cwd: mainMobileLess,
                    src: ["**/*.less"],
                    dest: buildMobileStyles,
                    ext: ".css"
                }]
            }
        },
        copy: {
            json: {
                expand: true,
                cwd: mainServer,
                src: ["**/*.json"],
                dest: buildServer
            },
            css: {
                expand: true,
                cwd: mainWebClientCss,
                src: ["**/*.css"],
                dest: buildStyles
            },
            mobileCss: {
                expand: true,
                cwd: mainMobileCss,
                src: ["**/*.css"],
                dest: buildMobileStyles
            },
            images: {
                expand: true,
                cwd: mainWebClientImages,
                src: ["**/*.*"],
                dest: buildImages
            },
            mobileImages: {
                expand: true,
                cwd: mainMobileImages,
                src: ["**/*.*"],
                dest: buildMobileImages
            },
            scripts: {
                expand: true,
                cwd: mainWebClientScripts,
                src: ["**/*.js"],
                dest: buildScripts
            },
            mobileScripts: {
                expand: true,
                cwd: mainMobileScripts,
                src: ["**/*.js"],
                dest: buildMobileScripts
            },
            fonts: {
                expand: true,
                cwd: mainWebClientFonts,
                src: ["**/*.*"],
                dest: buildFonts
            },
            mobileFonts: {
                expand: true,
                cwd: mainMobileFonts,
                src: ["**/*.*"],
                dest: buildMobileFonts
            },
            views: {
                expand: true,
                cwd: mainWebClientViews,
                src: ["**/*.*"],
                dest: buildViews
            },
            mobileViews: {
                expand: true,
                cwd: mainMobileViews,
                src: ["**/*.*"],
                dest: buildMobileViews
            },
            mobileAudios: {
                expand: true,
                cwd: mainMobileAudios,
                src: ["**/*.*"],
                dest: buildMobileAudios
            }
        },
        ts: {
            server: {
                files:[{
                    src: sourceServer,
                    dest: buildServer
                }],
                options: {
                    fast: "never",
                    module: "commonjs",
                    target: "es5",
                    noImplicitAny: true,
                    suppressImplicitAnyIndexErrors : true,
                    removeComments: true,
                    failOnTypeErrors: false,
                    sourceMap: false
                }
            },
            webClient: {
                files: [{
                    src: sourceWebClient,
                    dest: buildScripts + "app.js"
                }],
                options: {
                    fast: "never",
                    module: "amd",
                    target: "es5",
                    noImplicitAny: true,
                    suppressImplicitAnyIndexErrors : true,
                    removeComments: true,
                    failOnTypeErrors: false,
                    sourceMap: false,
                }
            },
            mobile: {
                files: [{
                    src: sourceMobile,
                    dest: buildMobileScripts + "app.js"
                }],
                options: {
                    fast: "never",
                    module: "amd",
                    target: "es5",
                    noImplicitAny: true,
                    suppressImplicitAnyIndexErrors : true,
                    removeComments: true,
                    failOnTypeErrors: false,
                    sourceMap: false,
                }
            }
        },
        watch: {
            json: {
                files: [
                    mainServer + "**/*.json"
                ],
                tasks: ["copy:json"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            less: {
                files: [
                    mainWebClientLess + "**/*.less"
                ],
                tasks: ["less:webClient"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            mobileLess: {
                files: [
                    mainMobileLess + "**/*.less"
                ],
                tasks: ["less:mobile"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            css: {
                files: [mainWebClientCss + "**/*.css"],
                tasks: ["copy:css"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            mobileCss: {
                files: [mainMobileCss + "**/*.css"],
                tasks: ["copy:mobileCss"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            images: {
                files: [mainWebClientImages + "**/*.*"],
                tasks: ["copy:images"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            mobileImages: {
                files: [mainMobileImages + "**/*.*"],
                tasks: ["copy:mobileImages"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            scripts: {
                files: [mainWebClientScripts + "**/*.js"],
                tasks: ["copy:scripts"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            mobileScripts: {
                files: [mainMobileScripts + "**/*.js"],
                tasks: ["copy:mobileScripts"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            fonts: {
                files: [mainWebClientFonts + "**/*.*"],
                tasks: ["copy:fonts"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            mobileFonts: {
                files: [mainMobileFonts + "**/*.*"],
                tasks: ["copy:mobileFonts"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            views: {
                files: [mainWebClientViews + "**/*.*"],
                tasks: ["copy:views"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            mobileViews: {
                files: [mainMobileViews + "**/*.*"],
                tasks: ["copy:mobileViews"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            tsServer: {
                files: sourceServer,
                tasks: ["ts:server"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            tsWebClient: {
                files: sourceWebClient,
                tasks: ["ts:webClient"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            },
            tsMoble: {
                files: sourceMobile,
                tasks: ["ts:mobile"],
                options: {
                    spawn: false,
                    event: ["added", "changed", "deleted"]
                }
            }
        },
        nodemon: {
            dev: {
                script: buildServer + "main/server/Main.js",
                options: {
                    watch: [buildServer],
                    env: {
                        DB_NAME: "rollcalltours",
                        DB_USER: "root",
                        DB_PASS: "root",
                        DB_HOST: "localhost",
                        DB_PORT: 3306,
                        ROLLCALL_PORT: 8080,
                        ROLLCALL_HOST: "development_server"
                    }
                }
            }
        },
        concurrent: {
            dev: [
                "watch",
                "nodemon"
            ],
            options: {
                logConcurrentOutput: true
            }
        },
    });

    grunt.event.on("watch", function(action, filePath, target) {
        var srcOption = "";
        var srcPath = "";
        var index;
        var extension = path.extname(filePath);
        if((index = filePath.indexOf(mainServer)) >= 0 && extension == ".json") {
            srcOption = "copy.json.src";
            srcPath = filePath.substring(index + mainServer.length);
        } else if((index = filePath.indexOf(mainWebClientLess)) >= 0) {
            srcOption = "less.webClient.files.0.src";
            srcPath = filePath.substring(index + mainWebClientLess.length);
        } else if((index = filePath.indexOf(mainMobileLess)) >= 0) {
            srcOption = "less.mobile.files.0.src";
            srcPath = filePath.substring(index + mainMobileLess.length);
        } else if((index = filePath.indexOf(mainWebClientCss)) >= 0) {
            srcOption = "copy.css.src";
            srcPath = filePath.substring(index + mainWebClientCss.length);
        } else if((index = filePath.indexOf(mainMobileCss)) >= 0) {
            srcOption = "copy.mobileCss.src";
            srcPath = filePath.substring(index + mainMobileCss.length);
        } else if((index = filePath.indexOf(mainWebClientImages)) >= 0) {
            srcOption = "copy.images.src";
            srcPath = filePath.substring(index + mainWebClientImages.length);
        } else if((index = filePath.indexOf(mainMobileImages)) >= 0) {
            srcOption = "copy.mobileImages.src";
            srcPath = filePath.substring(index + mainMobileImages.length);
        } else if((index = filePath.indexOf(mainWebClientScripts)) >= 0) {
            srcOption = "copy.scripts.src";
            srcPath = filePath.substring(index + mainWebClientScripts.length);
        } else if((index = filePath.indexOf(mainMobileScripts)) >= 0) {
            srcOption = "copy.mobileScripts.src";
            srcPath = filePath.substring(index + mainMobileScripts.length);
        } else if ((index = filePath.indexOf(mainWebClientFonts)) >= 0) {
            srcOption = "copy.fonts.src";
            srcPath = filePath.substring(index + mainWebClientFonts.length);
        } else if ((index = filePath.indexOf(mainMobileFonts)) >= 0) {
            srcOption = "copy.mobileFonts.src";
            srcPath = filePath.substring(index + mainMobileFonts.length);
        } else if ((index = filePath.indexOf(mainWebClientViews)) >= 0) {
            srcOption = "copy.views.src";
            srcPath = filePath.substring(index + mainWebClientViews.length);
        } else if ((index = filePath.indexOf(mainMobileViews)) >= 0) {
            srcOption = "copy.mobileViews.src";
            srcPath = filePath.substring(index + mainMobileViews.length);
        }

        if(srcOption) {
            grunt.config(srcOption, srcPath);
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-concurrent");

    grunt.registerTask("default", ["less", "copy", "ts"]);
    grunt.registerTask("dev", ["less", "copy", "ts", "concurrent"]);
}