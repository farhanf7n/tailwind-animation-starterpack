"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import useSettingsStore from "@/utils/store";
import { GrPowerReset } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";

const Settings = () => {
  const { settings, updateSetting } = useSettingsStore();
  const [resetLoading, setResetLoading] = useState(false);
  const [resetDone, setResetDone] = useState(false);

  const resetSettings = async () => {
    setResetLoading(true);
    updateSetting("timingFunction", "ease");
    updateSetting("duration", 1000);
    updateSetting("delay", 0);
    updateSetting("isEnabled", false);

    setTimeout(() => {
      setResetLoading(false);
      setResetDone(true);

      setTimeout(() => {
        setResetDone(false);
      }, 2000);
    }, 200);
  };
  return (
    <div className="max-w-[950px] mx-auto space-y-2">
      <div className="text-sm grid grid-cols-3 items-end gap-4 sm:gap-6 w-full px-4 py-3 border rounded-xl">
        <div className="space-y-2 flex-1">
          <label htmlFor="duration" className="mb-2 block">
            Duration: {settings.duration}ms
          </label>
          <Input
            id="duration"
            type="number"
            step="100"
            value={settings.duration}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              updateSetting("duration", isNaN(value) ? 0 : value);
            }}
            className="w-full"
          />
        </div>
        <div className="space-y-2 flex-1 ">
          <label htmlFor="delay">Delay: {settings.delay}ms</label>
          <Input
            id="delay"
            type="number"
            step="100"
            value={settings.delay}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              updateSetting("delay", isNaN(value) ? 0 : value);
            }}
            className="w-full"
          />
        </div>
        <div className="flex-1 space-y-2">
          <label>Timing Function</label>
          <Select
            onValueChange={(value) => {
              updateSetting("timingFunction", value);
            }}
            value={settings.timingFunction}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ease">Ease</SelectItem>
              <SelectItem value="linear">Linear</SelectItem>
              <SelectItem value="ease-in">Ease In</SelectItem>
              <SelectItem value="ease-out">Ease Out</SelectItem>
              <SelectItem value="ease-in-out">Ease In Out</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex-1 flex gap-8 items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            checked={settings.isEnabled}
            onClick={() => {
              updateSetting("isEnabled", !settings.isEnabled);
              console.log(settings.isEnabled);
            }}
          />
          <label htmlFor="airplane-mode">Show All Animations</label>
        </div>
        <div>
          <button
            className="flex space-x-2 items-center"
            onClick={resetSettings}
          >
            {resetDone ? (
              <>
                <FaCheck />
                <p>Reset Done</p>
              </>
            ) : (
              <>
                <GrPowerReset className={`${resetLoading && "animate-spin"}`} />
                <p>Reset Settings</p>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
