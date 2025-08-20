export interface Translation {
    common: {
        save: string;
        cancel: string;
        delete: string;
        edit: string;
        create: string;
        open: string;
        version: string;
        validation: {
            required: string;
            invalidName: string;
            nameTaken: string;
            enterName: string;
        };
        actions: {
            edit: string;
            delete: string;
            export: string;
        };
    };
    project: {
        title: string;
        create: string;
        open: string;
        close: string;
        recent: string;
        noProjects: string;
        createNew: {
            title: string;
            description: string;
        };
        openExisting: {
            title: string;
            description: string;
        };
        menu: {
            revealInExplorer: string;
            removeFromList: string;
        };
    };
    toast: {
        error: {
            projectCreate: string;
            projectOpen: string;
            projectNotFound: string;
            assetCreate: string;
            projectNotSelected: string;
        };
        success: {
            assetCreate: string;
        };
    };
    form: {
        title: string;
        path: {
            step: string;
            label: string;
            placeholder: string;
            error: string;
        };
        name: {
            step: string;
            label: string;
            placeholder: string;
            error: string;
        };
        tutorial: {
            label: string;
        };
        buttons: {
            back: string;
            create: string;
        };
    };
    createModal: {
        title: string;
        subtitle: string;
        step1: {
            title: string;
            expertArea: string;
        };
        step2: {
            title: string;
            placeholder: string;
            error: string;
        };
        buttons: {
            back: string;
            create: string;
        };
        assets: {
            schema: {
                name: string;
                description: string;
            };
            database: {
                name: string;
                description: string;
            };
            logic: {
                name: string;
                description: string;
            };
            api: {
                name: string;
                description: string;
            };
            query: {
                name: string;
                description: string;
            };
            code: {
                name: string;
                description: string;
            };
            rdb: {
                name: string;
                description: string;
            };
            prompt: {
                name: string;
                description: string;
            };
            blueprint: {
                name: string;
                description: string;
            };
        };
    };
    schemeAsset: {
        createFields: {
            title: string;
            subtitle: string;
            buttons: {
                createString: string;
                createNumber: string;
                createBoolean: string;
            };
        };
        noFields: {
            title: string;
            description: string;
        };
        bottomInput: {
            placeholder: string;
            error: {
                emptyValue: string;
                invalidName: string;
            };
        };
        inspector: {
            title: string;
            basicInfo: {
                title: string;
                fieldType: string;
                name: string;
                description: string;
            };
            properties: {
                title: string;
                array: string;
                nullable: string;
            };
            restrictions: {
                title: string;
            };
            model: {
                title: string;
                selectModel: string;
            };
            noField: string;
        };
        fieldTypes: {
            string: {
                like: string;
                gte: string;
                lte: string;
                regex: string;
                unique: string;
            };
            number: {
                gte: string;
                lte: string;
                unique: string;
            };
            date: {
                gte: string;
                lte: string;
            };
            file: {
                gte: string;
                lte: string;
                in: string;
                nin: string;
            };
            email: {
                indom: string;
                nindom: string;
            };
            enum: {
                in: string;
                nin: string;
            };
            image: {
                gte_wPx: string;
                gte_hPx: string;
                lte_wPx: string;
                lte_hPx: string;
                in_colorProfile: string;
            };
            word: {
                gte: string;
                lte: string;
            };
            excel: {
                gte: string;
                lte: string;
            };
            powerpoint: {
                gte: string;
                lte: string;
            };
            id: {
                type: string;
            };
            video: {
                gte: string;
                lte: string;
                in: string;
                nin: string;
            };
            audio: {
                gte: string;
                lte: string;
                in: string;
                nin: string;
            };
        };
    };
    components: {
        debouncedInput: {
            placeholder: string;
        };
        nameInput: {
            path: string;
            placeholder: string;
        };
        pinRenderer: {
            enterName: string;
            connectedTo: string;
        };
        assetSelector: {
            select: string;
            placeholder: string;
            scheme: string;
            logic: string;
            api: string;
            vqm: string;
            code: string;
            db: string;
            prompt: string;
        };
        assetList: {
            noAssets: string;
        };
        addVariableInput: {
            placeholder: string;
        };
        variableInput: {
            placeholder: string;
            validation: {
                invalidVariable: string;
                nameTaken: string;
            };
            selectField: string;
            arrayElements: string;
            deleteConfirm: string;
        };
        pinList: {
            input: string;
            output: string;
            error: {
                nodeNotFound: string;
            };
        };
        defaultValueInput: {
            enterNumber: string;
            enterText: string;
        };
        selector: {
            searchLogic: string;
            searchApiAsset: string;
            logic: string;
            asset: string;
            error: {
                apiNotFound: string;
            };
        };
        search: {
            placeholder: string;
        };
    };
    dbmAsset: {
        selectedSchema: string;
        schemaStructure: string;
        noFields: string;
    };
    logicAsset: {
        startNodeLengthError: string;
    };
    vqmAsset: {
        dependency: {
            schemeLoadError: string;
            dbLoadError: string;
        };
        node: {
            addNode: string;
            actionNodeError: string;
            modelNoedeError: string;
            pinConnectionError: string;
            model: {
                selectDBCategory: string;
                noDBM: string;
                addDBM: string;
                noRDB: string;
                addRDB: string;
                selectDBM: string;
                selectModel: string;
            };
            action: {
                noAction: string;
                selectAction: string;
            };
        };
        inspector: {
            noSelectedNodes: string;
            multiNodesSelected: string;
            description: {
                get: string;
                getSimple: string;
                create: string;
                createMany: string;
                update: string;
                delete: string;
                filter: string;
                count: string;
                min: string;
                max: string;
                avg: string;
                sum: string;
                group: string;
                and: string;
                or: string;
            };
            variable: {
                add: string;
            };
            input: {
                auto: string;
            };
        };
    };
    projectAsset: {
        general: {
            title: string;
            projectName: string;
            createdAt: string;
            unnamedProject: string;
        };
        version: {
            title: string;
            compilerVersion: string;
            selectVersion: string;
            mainApi: string;
            selectApi: string;
            noApis: string;
        };
        toast: {
            renamed: string;
        };
    };
    codeAsset: {
        editor: {
            formatError: string;
            defaultComments: string;
        };
        inspector: {
            inputParameters: string;
            outputParameters: string;
            callbackPins: string;
            validation: {
                invalidVariable: string;
            };
        };
    };
    inspector: {
        multiNodesSelected: string;
        information: string;
        noNodeSelected: string;
        nodeHandlers: {
            comment: {
                description: string;
                placeholder: string;
            };
            start: {
                parameter: string;
            };
            end: {
                state: string;
                options: {
                    end: string;
                    done: string;
                    error: string;
                };
            };
        };
    };
    sections: {
        variable: {
            title: string;
            noVariables: string;
            error: {
                duplicateName: string;
            };
        };
        schema: {
            title: string;
            error: {
                enterName: string;
                duplicateName: string;
            };
            export: {
                success: string;
                error: string;
                errorDetail: string;
            };
            input: {
                placeholder: string;
            };
        };
    };
    notFound: {
        title: string;
        description: string;
        goBack: string;
    };
    typeSelector: {
        backToTypes: string;
        noSchemas: string;
        options: {
            array: string;
            null: string;
        };
        types: {
            string: string;
            number: string;
            boolean: string;
            scheme: string;
            any: string;
            void: string;
            object: string;
        };
    };
    workspace: {
        back: string;
    };
    pinEditor: {
        toast: {
            duplicateName: string;
        };
        noPins: string;
    };
    rdbAsset: {
        inspector: {
            primaryKey: string;
            selectNode: string;
            nodeInfo: {
                type: string;
                columnType: string;
            };
            validation: {
                required: string;
                invalidName: string;
            };
            expertSettings: string;
            modelInspector: string;
            showNestedModels: string;
            hideNestedModels: string;
            totalModels: string;
            totalRelations: string;
            totalFields: string;
            modelDetails: string;
            fields: string;
        };
        databaseSettings: {
            title: string;
            rdbms: string;
            dbName: string;
            user: string;
            password: string;
            host: string;
            port: string;
            placeholder: string;
            test: string;
            cancel: string;
            save: string;
        };
        modelInspector: {
            title: string;
            name: string;
            type: string;
            options: {
                primary: string;
                nested: string;
            };
            cancel: string;
            save: string;
            statistics: string;
            details: string;
            fieldsCount: string;
        };
    };
    prompt: {
        editor: {
            title: string;
            placeholder: string;
            generate: string;
            generating: string;
        };
        inspector: {
            title: string;
            inputPins: string;
            outputPins: string;
            allowExternalLibs: string;
            settings: {
                title: string;
                temperature: string;
                maxTokens: string;
            };
        };
        log: {
            success: string;
            error: string;
            generating: string;
        };
        input: {
            description: string;
            placeholder: string;
        };
    };
    aiAssistant: {
        initialTitle: string;
        initialSubtitle: string;
        inputPlaceholder: string;
        error: {
            requestFailed: string;
            aiRequestFailed: string;
        };
        dialog: {
            title: string;
            planUpgrade: string;
            premiumPromotion: {
                question: string;
                suggestion: string;
                button: string;
            };
            additionalRequest: string;
        };
        assetOverview: {
            summary: {
                noAssets: string;
                model: string;
                visualScript: string;
                totalChanges: string;
                configured: string;
            };
            status: {
                add: string;
                update: string;
            };
            visualScript: {
                title: string;
                description: string;
            };
            buttons: {
                apply: string;
                additionalRequest: string;
            };
        };
        chat: {
            loading: string;
            error: string;
            copy: string;
            copied: string;
            copyFailed: string;
            dateFormat: {
                full: string;
            };
            clearHistory: string;
        };
    };
    blueprint: {
        header: {
            totalDefinitions: string;
            generateAssets: {
                button: string;
                disabled: string;
                progress: string;
            };
        };
        categorySelector: {
            mainCategory: string;
            subCategory: string;
            subSubCategory: string;
        };
        inspector: {
            aiSuggestion: string;
            applyAll: string;
            cancelAll: string;
        };
        controlBar: {
            remainingChanges: string;
            firstChange: string;
            prevChange: string;
            nextChange: string;
            lastChange: string;
            apply: string;
            cancel: string;
        };
    };
    auth: {
        editor: {
            database: {
                title: string;
                rdbSelect: string;
                selectRDB: string;
            };
            scm: {
                title: string;
                scmSelect: string;
                selectSCM: string;
            };
            relationship: {
                title: string;
                description: string;
                create: string;
            };
            basic: {
                title: string;
                emailPassword: string;
                google: string;
                kakao: string;
                apple: string;
                comingSoon: string;
                createTemplate: string;
            };
            roles: {
                title: string;
                duplicateRole: string;
                addRole: string;
            };
            events: {
                title: string;
                loginSuccess: string;
                loginFail: string;
                selectLogic: string;
            };
            tokens: {
                title: string;
                idToken: string;
                refreshToken: string;
                seconds: string;
            };
            codeGeneration: {
                title: string;
                description: string;
                signIn: string;
                signUp: string;
                success: string;
                error: string;
            };
        };
    };
}
