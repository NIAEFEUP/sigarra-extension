import SwitchControl from '../controls/SwitchControl'

const Section1Content = () => (
    <form className="flex flex-col items-center justify-between px-4 dark:bg-twitterBgTwoDark bg-twitterBgTwo rounded-2xl">
        <div className="w-full py-4">
            <div className="flex flex-col gap-y-4">
                <SwitchControl 
                    label="Preferência 1" 
                    storageKey="key1" />
                <SwitchControl
                    label="Preferência 2"
                    storageKey="key2"
                    defaultState={true}
                />
            </div>
        </div>
    </form>
)

export default Section1Content