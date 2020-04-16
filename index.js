export default function () {
    return {
        async reportTaskStart (/* startTime, userAgents, testCount */) {
            throw new Error('Not implemented');
        },

        async reportFixtureStart (/* name, path, meta */) {
            this.currentFixtureName = name;
            this.currentFixtureMeta = meta;
            this.write(`Starting fixture: ${name} ${meta.fixtureID}`)
                .newline();
        },

        async reportTestStart (/* name, meta */) {
            // NOTE: This method is optional.
        },

        async reportTestDone (/* name, testRunInfo, meta */) {
            const hasErr      = !!testRunInfo.errs.length;
            const hasWarnings = !!testRunInfo.warnings.length;
            const result      = testRunInfo.skipped ? 'skipped' : hasErr ? `passed` : `failed`;

            name = `${this.currentFixtureName} - ${name}`;

            let title = `${result} ${name}`;

            if (testRunInfo.unstable)
                title += ' (unstable)';

            if (testRunInfo.screenshotPath)
                title += ` (screenshots: ${testRunInfo.screenshotPath})`;

            if (meta.severity)
                title += ` (${meta.severity})`;

            if (hasWarnings)
                title += ' (with warnings)';

            this.write(title)
                .newline();
                },

        async reportTaskDone (/* endTime, passed, warnings, result */) {
            throw new Error('Not implemented');
        }
    };
}

    
