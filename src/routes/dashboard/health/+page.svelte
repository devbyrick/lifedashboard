<script lang="ts">


import DashboardPageTitle from "../../../lib/components/layout/DashboardPageTitle.svelte";
import {Routes} from "../../../lib/constants/routes";
</script>

<div class="w-full">
    <DashboardPageTitle pageTitle="Health"/>
    <div class="mt-3 w-full">
        <div class="w-full flex space-x-3">
            <a href={Routes.Dashboard.Health.Weight.Home} class="w-full">
                <div class="w-full stats shadow hover:bg-slate-100">
                    <div class="stat">
                        <div class="stat-title">Weight</div>
                        <div class="stat-value">90 kg</div>
                        <div class="stat-desc">21% more than last</div>
                    </div>
                </div>
            </a>
            <div class="w-full stats shadow">
                <div class="stat">
                    <div class="stat-title">Steps</div>
                    <div class="stat-value">8,400</div>
                    <div class="stat-desc">9% less than last month</div>
                </div>
            </div>
            <div class="w-full stats shadow">
                <div class="stat">
                    <div class="stat-title">Sleep</div>
                    <div class="stat-value">5hr20min</div>
                    <div class="stat-desc">14% more than last month</div>
                </div>
            </div>
            <div class="w-full stats shadow">
                <div class="stat">
                    <div class="stat-title">Coffee</div>
                    <div class="stat-value">3</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
            </div>
        </div>
    </div>



</div>