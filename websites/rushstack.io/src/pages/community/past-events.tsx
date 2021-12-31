import React from "react";

import { CommunitySidebarLayout } from "../../rscommunity/view/CommunitySidebarLayout";
import { CommunitySignInPage } from "../../rscommunity/view/CommunitySignInPage";
import { AppSession } from "../../rscommunity/model/AppSession";
import { EventCard } from "../../rscommunity/view/EventCard";
import {
  EventModel,
  ApiTask,
  ApiTaskStatus,
} from "../../rscommunity/model/ApiDataService";

class PastEventsPage extends React.Component {
  private _appSession: AppSession;
  public constructor(props: {}) {
    super(props);
    this._appSession = AppSession.instance;
  }

  public componentDidMount(): void {
    this._appSession.apiDataService.subscribe(this);
  }
  public componentWillUnmount(): void {
    this._appSession.apiDataService.unsubscribe(this);
  }

  public render(): JSX.Element {
    if (!this._appSession.loggedInUser) {
      return <CommunitySignInPage appSession={this._appSession} />;
    }

    const apiTask: ApiTask<EventModel[]> =
      this._appSession.apiDataService.initiateGetEvents(this, "past");

    if (apiTask.status === ApiTaskStatus.Error) {
      return <div>ERROR: {apiTask.error.message}</div>;
    }
    if (apiTask.status === ApiTaskStatus.Pending) {
      return <></>;
    }
    const eventModels: EventModel[] = apiTask.result;

    return (
      <CommunitySidebarLayout
        appSession={this._appSession}
        navItem="past-events"
        style={{ paddingTop: "100px" }}
      >
        <h1>Past Events</h1>
        <div style={{ maxWidth: "800px" }}>
          {eventModels.map((eventModel) => (
            <EventCard
              cardType="summary"
              eventModel={eventModel}
              key={eventModel.apiEvent.dbEventId}
            />
          ))}
        </div>
      </CommunitySidebarLayout>
    );
  }
}

export default PastEventsPage;
