export class Parallel {
    name: string | undefined;
    printRun: string | undefined;
    startDate: Date | undefined;
    endDate: Date | undefined;
    active: boolean | undefined;

    static newParallel(
        name: string,
        printRun = 'N/A',
        startDate: Date,
        endDate: Date,
        active = true
    ) {
        const parallel = new Parallel();
        parallel.name = name;
        parallel.printRun = printRun;
        parallel.startDate = startDate;
        parallel.endDate = endDate;
        parallel.active = active;
        return parallel;
    }

    toDataEntry() {
        return [this.name, this.printRun, this.startDate, this.endDate];
    }
}