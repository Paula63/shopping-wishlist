import { delay } from "../util/util";
import { sampleData } from '../components/wish-boards/sampleData';

export function fetchSampleData() {
    return delay(1000).then(function() {
        return Promise.resolve(sampleData)
    })
}