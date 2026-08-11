import mongoose, { Schema, Document, Model } from "mongoose";

export interface IWatchlist extends Document {
  userId: mongoose.Types.ObjectId;
  imdbID: string;
  title: string;
  year?: string;
  poster?: string;
  createdAt: Date;
  userRating?: number;
  reviewText?: string;
}

const WatchlistSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  imdbID: { type: String, required: true },
  title: { type: String, required: true },
  year: { type: String, required: false },
  poster: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  userRating: { type: Number, required: false, min: 1, max: 10 },
  reviewText: { type: String, required: false },
});

// Compound index to prevent duplicate movies per user's watchlist
WatchlistSchema.index({ userId: 1, imdbID: 1 }, { unique: true });

const Watchlist: Model<IWatchlist> = mongoose.models.Watchlist || mongoose.model<IWatchlist>("Watchlist", WatchlistSchema);
export default Watchlist;
